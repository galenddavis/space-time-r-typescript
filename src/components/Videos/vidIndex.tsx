import React, { useState } from 'react';
import { util } from 'webpack';
import { VideoIndexItem } from './vidIndexItem';
const Util = require('../../util/vid-utils');

type VideoIdxProps = {
    changeVideo(arg0: string): any
}

// type HiddenIndex = "hidden" | "unhidden"

export interface Video {
    title: "string",
    id: string
}

export const VideoIndex = ({changeVideo}: VideoIdxProps) => {
    const [indexHidden, setIndexHidden] = useState<string>('hidden');

    // Toggles visibility of track list
    const toggleIndex = () => {
        let indexState = indexHidden === "hidden" ? "unhidden" : "hidden"
        setIndexHidden(indexState)
    }

    // Mapping over videos in list
    const vidTitles = Util.videos.map((video: Video) => {
        return (
            <VideoIndexItem
                key={Util.videos.indexOf(video)}
                selectVid={() => changeVideo(video.id)}
                video={video}
            /> 
        )
    })

    // Returns video index to select song
    return (
        <div>
            <ul className={`video-index ${indexHidden}`}>{vidTitles}</ul>
            <button className='show-music btn' onClick={toggleIndex}>Show Music</button>
        </div>
    )
}