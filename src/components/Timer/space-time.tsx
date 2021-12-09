import React, { useState } from 'react'
import { Timer } from './timer'

export const SpaceTimer = () => {
    const defaultDuration = 25;
    const shortBreak = 5;
    const longBreak = 15;

    const [shortBreakCount, setShortBreakCount] = useState(0);
    const [currentClock, setCurrentClock] = useState(defaultDuration);

    // Logic for switching clocks when timer runs out

    const switchClocks = () => {
        if (currentClock === 25) {
            setCurrentClock(shortBreak)
        }
        if (currentClock === 5) {
            setCurrentClock(defaultDuration)
            setShortBreakCount(shortBreakCount + 1)
        }
        if (currentClock === 25 && shortBreakCount === 4) {
            setShortBreakCount(0)
            setCurrentClock(longBreak)
        }
        if (currentClock === 15) {
            setCurrentClock(defaultDuration)
        }
    }

    return (
        <div className='space-timer'>
            <section className='timer-tags'>
                <span onClick={() => setCurrentClock(defaultDuration)} >Space-Time</span>
                <span onClick={() => setCurrentClock(shortBreak)} >Short Break</span>
                <span onClick={() => setCurrentClock(longBreak)} >Long Break</span>
            </section>
            <Timer duration={currentClock} switchClocks={switchClocks} />
        </div>
    )
}