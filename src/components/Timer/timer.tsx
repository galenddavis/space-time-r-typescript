import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';

interface TimerProps {
    duration: number,
    switchClocks(): any 
}

export const Timer = ({ duration, switchClocks }: TimerProps) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(duration);
    const [running, setRunning] = useState(false);
    const [startBtn, setStartBtn] = useState("Start");

    // Timer start/stop toggle
    const toggle = useCallback(() => {
        startBtn === "Start" ? setStartBtn("Stop") : setStartBtn("Start")
        setRunning(!running)
    }, [running, startBtn])

    // reset the clock
    const reset = useCallback(() => {
        setMinutes(duration);
        setSeconds(0)
        setRunning(false)
        setStartBtn("Start")
    }, [duration])

    // Countdown functionality
    const countDown = useCallback(() => {
        if (minutes === 0 && seconds === 0) {
            toggle()
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

    // useEffect for reseting timer after changing durations
    useEffect(() => {
        reset()
    }, [duration])

    // useEffect for countdown functionality
    useEffect(() => {
        // let interval = null;
        if (running) {
            const interval = setInterval(() => {
                countDown()
            }, 0.5)
            return () => clearInterval(interval)
        }
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