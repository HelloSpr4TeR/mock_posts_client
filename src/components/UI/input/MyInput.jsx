import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  margin: 5px 0;
  border: 1px solid #e74c3c;
  border-radius: 6px;
  outline: none;
  font-size: 16px; /* добавлено для соответствия select */

  &:focus {
    border-color: #c0392b;
    box-shadow: 0 0 5px rgba(192, 57, 43, 0.5);
  }

  &::placeholder {
    color: #e74c3c;
  }
`;

const MyInput = React.forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default MyInput;