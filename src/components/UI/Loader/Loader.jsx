import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.4);
  }
`;

const StyledLoader = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed #e74c3c;
  animation: ${rotate} 1s infinite linear;
  
  margin: 0;
  padding: 0;
  z-index: 1000;
`;

const Loader = () => {
  return (
    <div className="loader-container">
      <StyledLoader />
    </div>
  );
};

export default Loader;