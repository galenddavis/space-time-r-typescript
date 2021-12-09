import React, { useState } from 'react';
import { VideoIndexItem } from './vidIndexItem';
const changeIndex = require('../../assets/cassette_btn.png');
const Util = require('../../util/vid-utils');

// type VideoIdxProps = {
//     changeVideo(arg0: string): any
// }

// type HiddenIndex = "hidden" | "unhidden"

// export interface Video {
//     title: "string",
//     id: string
// }

export const VideoIndex = ({changeVideo}) => {
    const [indexHidden, setIndexHidden] = useState('hidden');

    // Toggles visibility of track list
    const toggleIndex = () => {
        let indexState = indexHidden === "hidden" ? "unhidden" : "hidden"
        setIndexHidden(indexState)
    }

    // Mapping over videos in list
    const vidTitles = Util.videos.map((video) => {
        return (
            <VideoIndexItem
                key={Util.videos.indexOf(video)}
                selectVid={() => changeVideo(video.id)}
                video={video}
            /> 
        )
    })

    // Returns video index to select song. List of songs that we can click on to chose song
    return (
        <div>
            <ul className={`video-index ${indexHidden}`}>{vidTitles}</ul>
            <img src={changeIndex} alt="change index" onClick={toggleIndex} />
            {/* <button className='show-music btn' onClick={toggleIndex}>Show Music</button> */}
        </div>
    )
}