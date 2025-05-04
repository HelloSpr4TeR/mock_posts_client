import React, { useState, useContext } from 'react';
import styled, { keyframes, css } from 'styled-components';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%; /* заменено с 100vw */
  background: linear-gradient(135deg, rgb(255, 194, 194) 0%, hsl(0, 100.00%, 87.60%) 100%);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ff4d4d;
  border-radius: 10px;
  background-color: #fff0f0;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.2);
  gap: 1rem;
  min-width: 320px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Heading = styled.h1`
  color: #cc0000;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-align: center;
  animation: fadeInHeading 1s ease-out;

  @keyframes fadeInHeading {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InputWrapper = styled.div`
  ${({ isShaking }) => isShaking && css`
    animation: ${shake} 0.5s ease-in-out;
  `}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleLoginChange = (event) => setLogin(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const validateInputs = () => {
    const loginPattern = /^[a-zA-Z0-9._%+-]+@(.*\.(ru|com))$/;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/;

    if (!loginPattern.test(login) || !passwordPattern.test(password)) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return false;
    }
    return true;
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (validateInputs()) {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
    }
  };

  return (
    <Container>
      <Heading>Добро пожаловать!</Heading>
      <StyledForm onSubmit={loginHandler}>
        <InputWrapper isShaking={isShaking}>
          <MyInput
            type="text"
            placeholder="Введите логин"
            value={login}
            onChange={handleLoginChange}
          />
        </InputWrapper>
        <InputWrapper isShaking={isShaking}>
          <MyInput
            type="password"
            placeholder="Введите пароль"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputWrapper>
        <ButtonWrapper>
          <MyButton>Войти</MyButton>
        </ButtonWrapper>
      </StyledForm>
    </Container>
  );
};

export default Login;