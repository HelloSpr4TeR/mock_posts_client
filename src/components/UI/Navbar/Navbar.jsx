import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import styled, { keyframes } from 'styled-components';
import ClockTime from '../../ClockTime';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);  // Начнем с небольшого сдвига вверх
  }
  100% {
    opacity: 1;
    transform: translateY(0);  // В конце вернем на место
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
  position: relative;
  animation: ${fadeIn} 1s ease-out forwards;  // Применяем анимацию
`;

const NavbarLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
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
  const isCounterPage = pathname === '/about';

  return (
    <NavbarWrapper>
      <MyButton onClick={logout}>Выйти</MyButton>

      {!isClockPage && (
        <ClockContainer onClick={() => navigate('/clock')}>
          <ClockTime />
        </ClockContainer>
      )}

      <NavbarLinks>
        {!isCounterPage && !isPostPage && (
          <MyButton onClick={() => navigate('/about')}>Счетчик</MyButton>
        )}
        {!isPostsPage && (
          <MyButton onClick={() => navigate('/')}>Посты</MyButton>
        )}
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;