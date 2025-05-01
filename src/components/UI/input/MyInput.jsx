import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  margin: 5px 0;
  border: 1px solid #e74c3c; /* Красный бордер */
  border-radius: 6px; /* Скругленные углы */
  outline: none; /* Убираем обводку при фокусе */

  &:focus {
    border-color: #c0392b; /* Более темный красный при фокусе */
    box-shadow: 0 0 5px rgba(192, 57, 43, 0.5); /* Легкая тень при фокусе */
  }

  &::placeholder {
    color: #e74c3c; /* Красный цвет для плейсхолдера */
  }
`;

const MyInput = React.forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default MyInput;