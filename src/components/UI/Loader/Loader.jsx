import React from 'react';
import styled, { keyframes } from 'styled-components';

// Создаем анимацию rotate с использованием keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.4);
  }
`;

// Создаем стилизованный компонент Loader
const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed #e74c3c; /* Красный цвет для бордера */
  animation: ${rotate} 1s infinite linear;
`;

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;