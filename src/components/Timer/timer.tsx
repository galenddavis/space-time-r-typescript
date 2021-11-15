import React, { useState, useEffect, useCallback, FunctionComponent } from 'react';

interface TimerProps {
    duration: number, 
    switchClocks(): any
}

export const Timer: FunctionComponent<TimerProps> = ({ duration, switchClocks }) => {
    // const [finished, setFinished] = useState(false)
    const [seconds, setSeconds] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(duration);
    const [running, setRunning] = useState<boolean>(false);
    const [startBtn, setStartBtn] = useState<string>("Start")

    // Timer start/stop toggle
    const toggle = useCallback(() => {
        
        if (startBtn === "Start") {
            setStartBtn("Stop")    
        } else {
            setStartBtn("Start")    
        }
        setRunning(!running);
    }, [running, startBtn])

    // reset the clock
    const reset = useCallback(() => {
        setMinutes(duration);
        setSeconds(0)
        setRunning(false);
        setStartBtn("Start")
    }, [duration])

    // Countdown functionality
    const countDown = useCallback(() => {
        if (minutes === 0 && seconds === 0) {
            toggle()
            // setFinished(true)
            switchClocks()
        } 
        if (minutes > 0 && seconds === 0) {
            setSeconds(59)
            setMinutes(minutes - 1)
        }
        if (seconds !== 0) {
            setSeconds(seconds - 1)
        }
    }, [minutes, seconds, toggle, switchClocks])


    // Use effect for reseting timer after changing durations
    useEffect(() => {
        reset()
    }, [reset])
    

    // Use effect for countdown functionality
    useEffect(() => {
        let interval: NodeJS.Timer;
        if (running) {
            interval = setInterval(() => {
                countDown()
            }, 0.5)
        } 
        return () => clearInterval(interval)
    }, [running, countDown])

    return (
        <div>
            <span>{minutes}:</span>
            <span>{('0' + seconds).slice(-2)}</span>

            <button onClick={toggle}>{startBtn}</button>  
            
            <button onClick={reset}>Reset</button>  
        </div>
    )

}
