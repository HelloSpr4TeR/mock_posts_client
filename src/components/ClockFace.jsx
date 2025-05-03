import React, { useState, useEffect } from 'react';
import ReactClock from 'react-clock';
import 'react-clock/dist/Clock.css';
import styled from 'styled-components';

const ClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #fff;
  border: 8px solid #ff4d4d; /* Красная рамка */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 20px;
`;

const CustomClock = styled(ReactClock)`
  .react-clock__face {
    border-color: #ff4d4d; /* Красная рамка для лица */
    background-color: #fff;
  }

  .react-clock__hour, .react-clock__minute, .react-clock__second {
    background-color: #ff4d4d; /* Красные стрелки */
  }

  .react-clock__hour {
    background-color: #ff4d4d; /* Красная стрелка для часов */
  }

  .react-clock__minute {
    background-color: #ff8080; /* Светло-красная стрелка для минут */
  }

  .react-clock__second {
    background-color: #ffb3b3; /* Еще более светлый красный для секунд */
  }
`;

const ClockFace = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ClockWrapper>
      <CustomClock value={time} />
    </ClockWrapper>
  );
};

export default ClockFace;