import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 5px 15px;
  color: white;
  margin-left: 5px;
  font-size: 14px;
  background: #e74c3c; /* Красный фон */
  border: 1px solid #e74c3c; /* Красный бордер */
  cursor: pointer;
  border-radius: 6px; /* Скругленные углы */
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: white; /* Белый фон при наведении */
    color: #e74c3c; /* Красный текст при наведении */
    border-color: #e74c3c; /* Красный бордер при наведении */
  }
`;

const MyButton = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default MyButton;