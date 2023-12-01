import { classNames } from 'shared/lib/classNames/classNames';
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getUIScrollByPath, uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useSelector } from 'react-redux';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const { pathname } = useLocation();
  const scrollPosition = useSelector(getUIScrollByPath)(pathname);

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition; // Наблюдались баги в хроме со скроллом при маунте
  });

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  const onScroll = useDebounce((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: (e.target as HTMLElement).scrollTop,
        path: pathname,
      }),
    );
  }, 100);

  return (
    <div
      onScroll={onScroll}
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </div>
  );
});
