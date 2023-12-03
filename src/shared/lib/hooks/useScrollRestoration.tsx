import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

/**
 * Переработанная версия хука
 * https://github.com/wildcatco/use-scroll-restoration
 */

interface ScrollRestorationOptions {
  persist?: 'sessionStorage';
}

const STORAGE_KEY = 'scrollRestoration-';

type ScrollPosition = { scrollTop: number; scrollLeft: number };
export const useScrollRestoration = <E extends HTMLElement>(
  key: string,
  { persist = 'sessionStorage' }: ScrollRestorationOptions = {},
) => {
  const ref = useRef(null) as MutableRefObject<E | null>;

  const getRestorationData = useCallback((): ScrollPosition | null => {
    switch (persist) {
      case 'sessionStorage': {
        const data = sessionStorage.getItem(`${STORAGE_KEY}${key}`);
        return data ? (JSON.parse(data) as ScrollPosition) : null;
      }
      default:
        return null;
    }
  }, [key, persist]);

  const setRestorationDataToStorage = useCallback(
    (entity: { scrollTop: number; scrollLeft: number }) => {
      switch (persist) {
        case 'sessionStorage':
          sessionStorage.setItem(
            `${STORAGE_KEY}${key}`,
            JSON.stringify(entity),
          );
          break;
        default:
          throw new Error('unknown persist');
      }
    },
    [key, persist],
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const handleScroll = () => {
      const { scrollTop } = element;
      const { scrollLeft } = element;

      const scrollPositions = { scrollTop, scrollLeft };
      setRestorationDataToStorage(scrollPositions);
    };

    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [setRestorationDataToStorage]);

  // restoration
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const restorationData = getRestorationData();
      if (restorationData) {
        element.scrollTo(restorationData.scrollLeft, restorationData.scrollTop);
      } else {
        const initialScrollRestoration = {
          scrollTop: element.scrollTop,
          scrollLeft: element.scrollLeft,
        };
        setRestorationDataToStorage(initialScrollRestoration);
      }
    }
  }, [getRestorationData, setRestorationDataToStorage]);

  const setScroll = () => {};

  return { ref, setScroll };
};
