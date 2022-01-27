import React, {useEffect, useState} from 'react';
import Youtube from 'react-youtube';
// import shuffleBtn from '../../images/shuffle-btn.png';
// import playBtn from '../../images/play-btn.png';
// import pauseBtn from '../../images/pause-btn.png';
// const pauseBtn = require('../../images/pause-btn.png')
import { VideoIndex } from './vid-index';
const Util = require('../../util/vid-utils');

interface VidPlayerProps {
    videoId: string
};

export const VidPlayer = ({ videoId }: VidPlayerProps) => {
    const [videoSrc, setVideoSrc] = useState<string>(videoId || Util.videos[0].id)
    const [player, setPlayer] = useState<any>(null)

    // Resets video player if videoId prop changes
    useEffect(() => {
        setVideoSrc(videoId)
    }, [videoId])

    // Selects new random video from the list
    const shuffleVideo = (numVids: number) => {
        let randomNum = Math.floor(Math.random() * (numVids - 1) + 1)
        setVideoSrc(Util.videos[randomNum].id)
    }

    // Select and Change Video
    const changeVideo = ({ videoId }: {videoId: string}): void => {
        debugger
        setVideoSrc(videoId)
    }

    // Pause Video
    const pauseVid = () => {
        player.pauseVideo()
    }

    // Play Video
    const playVid = () => {
        player.playVideo()
    }
    
    const onReady = (event: any) => {
        setPlayer(event.target)
    }

    return (
        <div className='video-player-container'>
            <Youtube
                className='video-player'
                videoId={videoSrc}
                opts={Util.opts}
                onReady={onReady}
            />
            <section className='video-buttons'>
                <VideoIndex changeVideo={() => changeVideo} />
                {/* <img src={shuffleBtn} alt="play" onClick={() => shuffleVideo(Util.videos.length)} />
                <img src={playBtn} alt="play" onClick={() => playVid()} />
                <img src={pauseBtn} alt="pause" onClick={() => pauseVid()} /> */}
            </section>
        </div>
    )

}
