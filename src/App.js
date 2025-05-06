import React, { useEffect } from 'react';
import './styles/App.css';
import './styles/media.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter';
import { AuthContext } from './context';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setIsLoading } from './store/slices/AppSlice';

function App() {
  const dispatch = useDispatch();
  const { isAuth, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(setIsAuth(true));
    }
    dispatch(setIsLoading(false));
  }, [dispatch]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth: (auth) => dispatch(setIsAuth(auth)),
        isLoading,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;