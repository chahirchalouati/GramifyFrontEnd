import React from 'react'
import SideBarVideo from './VideoSideBar';
import VideoContainer from './VideoContainer';


export default function VideosList() {
    return (
        <div className='video_List'>
            <SideBarVideo />
            <VideoContainer />
        </div>
    )
}
