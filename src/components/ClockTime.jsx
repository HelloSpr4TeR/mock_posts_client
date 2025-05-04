import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeWrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #cc0000;
  background-color: #fff2f2;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  min-width: 120px;
`;

const ClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <TimeWrapper>
      {formatTime(time)}
    </TimeWrapper>
  );
};

export default ClockTime;