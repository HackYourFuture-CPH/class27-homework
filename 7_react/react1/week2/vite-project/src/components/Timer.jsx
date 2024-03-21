import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1000);
      }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="timer">
      <h2>Time spent on the website:</h2>
      <p>{formatTime(elapsedTime)}</p>
    </div>
  );
};

export default Timer;
