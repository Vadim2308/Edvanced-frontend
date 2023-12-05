import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useLocation } from 'react-router-dom';
import { useScrollRestoration } from 'shared/lib/hooks/useScrollRestoration';
import cls from './Page.module.scss';

interface PageProps {
  children: ReactNode;
  onScrollEnd?: () => void;
  scrollRestoration?: boolean;
  className?: string;
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd, scrollRestoration } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { pathname } = useLocation();

  const { ref } = useScrollRestoration<HTMLDivElement>(pathname, {
    persist: 'sessionStorage',
  });
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const currentWrapperRef = scrollRestoration
    ? (ref as MutableRefObject<HTMLDivElement>)
    : wrapperRef;

  useInfiniteScroll({
    triggerRef,
    wrapperRef: currentWrapperRef,
    callback: onScrollEnd,
  });

  return (
    <div
      ref={currentWrapperRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      {onScrollEnd && (
        <div id='triggerRef' className={cls.trigger} ref={triggerRef} />
      )}
    </div>
  );
});
