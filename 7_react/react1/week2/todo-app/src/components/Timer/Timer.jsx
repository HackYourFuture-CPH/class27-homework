import { useEffect, useState } from 'react';



const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            setSeconds(prevSeconds => {
                if (prevSeconds ===59) {
                    setMinutes(prevMinutes => prevMinutes + 1);
                    return 0;
                }else{
                    return prevSeconds + 1;
                }
            });
        },1000);
        return () => clearInterval(timer);
    
    }, []);

    return (
        <div className="timer">
            <div className="container">
                <div className='timer_container'>
                    <h1>Your session: {minutes < 10 ? "0"+ minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
                </div>
            </div>
        </div>
    )
}

export default Timer;