import React, { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useScrollRestoration } from '@/shared/lib/hooks/useScrollRestoration';
import cls from './Page.module.scss';
import type { TestProps } from '@/shared/types/testing';

interface PageProps extends TestProps {
  children: ReactNode;
  onScrollEnd?: () => void;
  scrollRestoration?: boolean;
  className?: string;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const {
    'data-testid': dataTestId,
    className,
    children,
    onScrollEnd,
    scrollRestoration,
  } = props;
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
    <main
      id={PAGE_ID}
      data-testid={dataTestId ?? 'Page'}
      ref={currentWrapperRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      {onScrollEnd && (
        <div id='triggerRef' className={cls.trigger} ref={triggerRef} />
      )}
    </main>
  );
});
