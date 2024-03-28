import { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='timer'>
            <strong><h4>You have used {seconds} seconds on this website</h4></strong>
        </div>
    );
}

export default Timer;

