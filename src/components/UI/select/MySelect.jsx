import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 200px; /* фиксированная ширина */
  padding: 5px 15px;
  margin: 5px 10px 5px 0;
  border: 1px solid #e74c3c;
  border-radius: 6px;
  outline: none;

  color: #e74c3c;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    border-color: #c0392b;
    box-shadow: 0 0 5px rgba(192, 57, 43, 0.5);
  }
`;

const StyledOption = styled.option`
  color: #333;
  background-color: #fff;
`;

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <StyledSelect value={value} onChange={event => onChange(event.target.value)}>
      <StyledOption disabled value=''>{defaultValue}</StyledOption>
      {options.map(option =>
        <StyledOption key={option.value} value={option.value}>
          {option.name}
        </StyledOption>
      )}
    </StyledSelect>
  );
};

export default MySelect;