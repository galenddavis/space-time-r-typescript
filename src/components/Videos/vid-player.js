import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { VideoIndex } from './vidIndex'
const shuffleBtn = ('../../assets/shuffle_button.png');
// import shuffleBtn from '../../images/shuffle_button.png'
// import playBtn from '../../images/play_button.png';
// import pauseBtn from '../../images/pause_button.png';
import Util from '../../util/vid-utils';

// interface VideoProps {
//     videoId: string
// }

export const VidPlayer = ({videoId}) => {
    const [videoSrc, setVideoSrc] = useState("3ST4fDVyAzA");
    const [player, setPlayer] = useState(null)

    // Resets the video player if videoId prop changes
    useEffect(() => {
        setVideoSrc(videoId)
    }, [videoId])

    // Selects a new random video from the list
    const shuffleVideo = (numVids) => {
        let randomNum = Math.floor(Math.random() * (numVids - 1) + 1)
        setVideoSrc(Util.videos[randomNum].id)
    }

    // Select and Change Video
    const changeVideo = (videoId) => {
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
    const onReady = (event) => {
        setPlayer(event.target)
    }

    // Returns the Video Index along side the video index along with the control buttons
    return (
        <div className= "video-player">
            {/* <YouTube 
                className='video'
                videoId={videoSrc}
                opts={Util.opts}
                onReady={onReady}
            /> */}
            <section className='vid-buttons'>
                <VideoIndex changeVideo={changeVideo} />
                {/* Swap out buttons for images w/onclicks */}
                <button onClick={() => shuffleVideo(Util.videos.length)} >Change Music</button>
                <button className='pause btn' onClick={() => pauseVid()} >Pause</button>  
                <button className='play btn' onClick={() => playVid()} >Play</button>  
                <img src={shuffleBtn} alt="shuffle-btn" onClick={ () => shuffleVideo(Util.videos.length) } />
                {/* <img src={playBtn} alt="play-btn" onClick={ () => playVid() } />
                <img src={pauseBtn} alt="pause-btn" onClick={ () => pauseVid() } />  */}
            </section>
        </div>
    )
}