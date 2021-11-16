import React from 'react';
import { Video } from './vidIndex';

type IndexItemProps ={
    selectVid(arg0: string): any,
    video: Video
}

export const VideoIndexItem = ({selectVid, video}: IndexItemProps) => {
    return (
        <li className="vidItem" onClick={() => selectVid(video.id)}>{video.title}</li>
    )
}
