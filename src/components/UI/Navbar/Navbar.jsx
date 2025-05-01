import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import styled from 'styled-components';

// Создаем стилизованный компонент для навбара
const NavbarWrapper = styled.div`
  height: 50px;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background: #ff4d4d; /* Красный фон */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

// Стили для контейнера ссылок
const NavbarLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #ffb3b3; /* Светло-красный при наведении */
    }
  }
`;

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <NavbarWrapper>
      <MyButton onClick={logout}>Выйти</MyButton>
      <NavbarLinks>
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Посты</Link>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;