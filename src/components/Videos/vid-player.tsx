import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { VideoIndex } from './vidIndex'
const Util = require('../../util/vid-utils');

type VideoProps = {
    videoId: string
}

export const VidPlayer = ({videoId}: VideoProps) => {
    const [videoSrc, setVideoSrc] = useState<string>("3ST4fDVyAzA");
    const [player, setPlayer] = useState<any>()

    // Resets the video player if videoId prop changes
    useEffect(() => {
        setVideoSrc(videoId)
    }, [videoId])

    // Selects a new random video from the list
    const shuffleVideo = (numVids: number) => {
        let randomNum: number = Math.floor(Math.random() * (numVids - 1) + 1)
        setVideoSrc(Util.videos[randomNum].id)
    }

    // Select and Change Video
    const changeVideo = (videoId: string) => {
        setVideoSrc(videoId)
    }

    // Pauses Video
    const pauseVid = () => {
        player.pauseVideo();
    }

    // Plays Video
    const playVid = () => {
        player.playVideo();
    }

    // Sets current video as Player
    const onReady = (event: any) => {
        setPlayer(event.target)
    }

    // Returns the Video Index along side the video index along with the control buttons
    return (
        <div className= "video-player">
            <YouTube 
                className='video'
                videoId={videoSrc}
                opts={Util.opts}
                onReady={onReady}
            />
            <section className='vid-buttons'>
                <VideoIndex changeVideo={changeVideo} />
                {/* Swap out buttons for images w/onclicks */}
                <button onClick={() => shuffleVideo(Util.videos.length)} >Change Music</button>
                <button className='pause btn' onClick={() => pauseVid()} >Pause</button>  
                <button className='play btn' onClick={() => playVid()} >Play</button>  
            </section>
        </div>
    )
}