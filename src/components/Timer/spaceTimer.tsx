import React, { useState } from 'react';
import { Timer } from './timer'

export const SpaceTimer = () => {
    const defaultDuration: number = 25;
    const shortBreak: number = 5;
    const longBreak: number = 15;

    const [shortBreakCount, setShortBreakCount] = useState<number>(0);
    const [currentClock, setCurrentClock] = useState<number>(defaultDuration)

    // Logic for switching clock durations when timer runs out. 
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
            <section className='tabs'>
                <span onClick={() => setCurrentClock(defaultDuration)} >Space Timer</span>
                <span onClick={() => setCurrentClock(shortBreak)} >Short Break</span>
                <span onClick={() => setCurrentClock(longBreak)} >Long Break</span>
            </section>
            <Timer 
                duration={currentClock}
                switchClocks={switchClocks}
            />
        </div>
    )
}

// export default SpaceTimer;
