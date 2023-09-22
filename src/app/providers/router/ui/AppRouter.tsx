import { FC, memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

const AppRouter: FC = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(
    () =>
      Object.values(routeConfig)
        .filter((route) => !(route.authOnly && !isAuth))
        .map(({ element, path }) => (
          <Route
            key={path}
            element={<div className='page-wrapper'>{element}</div>}
            path={path}
          />
        )),
    [isAuth],
  );
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>{routes}</Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
