import React from 'react';
import { Video } from './vidIndex';

// type IndexItemProps ={
//     selectVid(arg0: string): any,
//     video: Video
// }

// Exports the individual list item detailing one specific video. 
export const VideoIndexItem = ({selectVid, video}) => {
    return (
        <li className="vidItem" onClick={() => selectVid(video.id)}>{video.title}</li>
    )
}
