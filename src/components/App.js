import React from 'react';
import '../styles/main.scss';
import { SpaceTimer } from './Timer/spaceTimer.tsx'
import { VidPlayer } from './Videos/vid-player.tsx'

export const App = () => {
    return (
        <div>
            <section>
                <SpaceTimer />
                <VidPlayer />
            </section>
        </div>
    )
}
