import React, { useState } from 'react';
const Util = require('../../util/vid-utils');
import { VideoIndexItem } from './vid-index-item';

interface VidIndexProps {
    changeVideo(videoId: string): void 
}

type Video = {
    title: string,
    id: string
}

export const VideoIndex = ({ changeVideo }: VidIndexProps) => {
    const [indexHidden, setIndexHidden] = useState<string>('hidden')

    const toggleIndex = () => {
        let indexState = indexHidden === 'hidden' ? 'unhidden' : 'hidden';
        setIndexHidden(indexState)
    }

    const vidTitles = Util.videos.map((video: Video) => {
        return (
            <VideoIndexItem 
                key={Util.videos.indexOf(video)}
                changeVideo={() => changeVideo(video.id)}
                video={video}
            />
        )
    })

    return (
        <div>
            <ul className={`video-index ${indexHidden}`}>{vidTitles}</ul>
        </div>
    )
}
