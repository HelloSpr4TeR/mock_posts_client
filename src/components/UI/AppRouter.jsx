import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../../router/Routes';
import Login from '../../pages/Login';
import Posts from '../../pages/Posts';
import { AuthContext } from '../../context';
import Loader from './Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loader />;
  }

  const isLoginPage = location.pathname === '/login';

  return (
    <div style={{ paddingTop: isAuth && !isLoginPage ? '60px' : '0' }}>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<Posts />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;