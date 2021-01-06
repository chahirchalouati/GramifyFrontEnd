import React, { useState } from 'react'
import { BsBookmarkFill } from 'react-icons/bs'
import { RiClapperboardFill, RiLiveLine, RiSlideshow3Fill } from 'react-icons/ri'
import Divider from '../Divider/Divider'
import WatchList from './WatchList'

export default function VideoNavigation() {
    const [fillsIcon, setfillsIcon] = useState({
        video: false,
        live: false,
        shows: false,
        registred: false,
    })
    return (
        <div className="video_navigation">

            <div className="video_navigation_item" onClick={e => setfillsIcon({ ...fillsIcon, video: true, live: false, shows: false, registred: false, })}>
                <div className="video_icon" style={{ background: fillsIcon.video ? 'rgb(23, 112, 230)' : '' }}><RiSlideshow3Fill fill={fillsIcon.video && "white"} size={22} style={{ filter: 'blur(0.4px)' }} /></div>
                <div className="video_icon_text">Home</div>
            </div>

            <div className="video_navigation_item" onClick={e => setfillsIcon({ ...fillsIcon, video: false, live: true, shows: false, registred: false, })}>
                <div className="video_icon" style={{ background: fillsIcon.live && 'rgb(23, 112, 230)' }}><RiClapperboardFill fill={fillsIcon.live && "white"} size={22} style={{ filter: 'blur(0.4px)' }} /></div>
                <div className="video_icon_text">Shows</div>
            </div>

            <div className="video_navigation_item" onClick={e => setfillsIcon({ ...fillsIcon, video: false, live: false, shows: true, registred: false, })}>
                <div className="video_icon" style={{ background: fillsIcon.shows && 'rgb(23, 112, 230)' }}><RiLiveLine fill={fillsIcon.shows && "white"} size={22} style={{ filter: 'blur(0.4px)' }} /></div>
                <div className="video_icon_text">Live</div>
            </div>
            <div className="video_navigation_item" onClick={e => setfillsIcon({ ...fillsIcon, video: false, live: false, shows: false, registred: true, })}>
                <div className="video_icon" style={{ background: fillsIcon.registred ? 'rgb(23, 112, 230)' : 'rgb(247, 185, 40)' }}><BsBookmarkFill size={22} style={{ filter: 'blur(0.4px)', fill: "white" }} /></div>
                <div className="video_icon_text">Saved videos</div>
            </div>
            <Divider style={{ width: '100%', margin: '3px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '1px' }}></Divider>
            <WatchList></WatchList>

        </div>
    )
}
