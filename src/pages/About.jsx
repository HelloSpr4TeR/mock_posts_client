import React from 'react';
import styled from 'styled-components';
import Counter from '../components/Counter';

const AboutWrapper = styled.div`
  padding: 40px;
  background: #fff0f0;
  border: 2px solid #ff4d4d;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(255, 0, 0, 0.15);
  max-width: 500px;
  margin: 40px auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #cc0000;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutWrapper>
      <Title>Sexy</Title>
      <Counter />
    </AboutWrapper>
  );
};

export default About;