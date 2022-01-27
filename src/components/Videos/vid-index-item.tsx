import React from 'react';


interface VidIndexItemProps {
    changeVideo(videoId: string): void,
    video: { title: string, id: string}
}

export const VideoIndexItem = ({ changeVideo, video }: VidIndexItemProps) => {

    return (
        <li
            className='vidItem'
            onClick={() => changeVideo(video.id)}
        >
            {video.title}   
        </li>
    )
}