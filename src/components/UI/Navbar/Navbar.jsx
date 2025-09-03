import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import styled, { keyframes } from 'styled-components';
import ClockTime from '../../ClockTime';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavbarWrapper = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #ff4d4d;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  animation: ${fadeIn} 1s ease-out forwards;
  z-index: 9999;
`;

const NavbarLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
  margin-right: 10px
`;

const ClockContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`;

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  if (!isAuth) return null;

  const pathname = location.pathname;
  const isClockPage = pathname.startsWith('/clock');
  const isPostsPage = pathname === '/';
  const isPostPage = pathname.startsWith('/posts/');
  const isTrackerPage = pathname === '/tracker';
  const isTrainingPage = pathname === '/training';


  return (
    <NavbarWrapper>
      <MyButton onClick={logout}>Выйти</MyButton>

      {!isClockPage && (
        <ClockContainer onClick={() => navigate('/clock')}>
          <ClockTime />
        </ClockContainer>
      )}

      <NavbarLinks>
        {!isTrackerPage && !isPostPage && (
          <MyButton onClick={() => navigate('/tracker')}>Tracking</MyButton>
        )}
        {!isPostsPage && (
          <MyButton onClick={() => navigate('/')}>Posts</MyButton>
        )}
        {!isTrainingPage && (
          <MyButton onClick={() => navigate('/training')}>Training</MyButton>
        )}
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;