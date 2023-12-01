import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // return () => {
    //   console.log('unmount');
    // };
    // eslint-disable-next-line
  }, []);
};
