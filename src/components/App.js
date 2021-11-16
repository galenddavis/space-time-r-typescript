import React from 'react';
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
