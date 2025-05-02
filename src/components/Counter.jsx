import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/slices/CountSlice';
import MyButton from './UI/button/MyButton';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #ffe5e5;
  border: 2px solid #ff4d4d;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(255, 0, 0, 0.2);
  max-width: 300px;
  margin: 0 auto;
`;

const CounterTitle = styled.h1`
  font-size: 48px;
  color: #ff1a1a;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Counter = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <CounterWrapper>
      <CounterTitle>{count}</CounterTitle>
      <ButtonGroup>
        <MyButton onClick={() => dispatch(increment())}>Прибавить</MyButton>
        <MyButton onClick={() => dispatch(decrement())}>Убавить</MyButton>
      </ButtonGroup>
    </CounterWrapper>
  );
};

export default Counter;