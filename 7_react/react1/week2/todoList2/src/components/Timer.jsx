import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            You have used {seconds} seconds
        </div>
    );
}

export default Timer;