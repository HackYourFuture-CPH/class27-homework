import React, { useState, useEffect } from 'react';

function Timer () {
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1000);
      }, 1000);
    return () => clearInterval(interval);
  }, [startTime]);

  function formatTime (milliseconds) {
    const seconds = Math.floor(milliseconds / 1000) % 60;

    return `${seconds}s`;
  };

  return (
    <div>
      <p>You have used {formatTime(elapsedTime)} second on this website</p>
    </div>
  );
};

export default Timer;