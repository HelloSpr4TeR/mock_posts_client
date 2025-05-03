import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(145deg, #ffe5e5, #ffcccc);
  border: 4px solid #ff4d4d;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(255, 77, 77, 0.3);
  max-width: 320px;
  margin: 20px auto;
`;

const Title = styled.h2`
  font-size: 20px;
  color: #ff4d4d;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyClock = ({ children }) => {
  return (
    <Wrapper>
      <Title>Мои Часы</Title>
      <InnerContainer>
        {children}
      </InnerContainer>
    </Wrapper>
  );
};

export default MyClock;