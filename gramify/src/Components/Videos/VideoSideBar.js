import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { RiSettings5Fill } from 'react-icons/ri'
import Divider from '../Divider/Divider'
import VideoNavigation from './VideoNavigation'

export default function VideoSideBar() {
    return (
        <div className='side_bar_story' style={{ position: 'fixed' }}>
            <div className="side_bar_story_header">

                <div className="head_story_header">
                    <h2 style={{ fontWeight: '500' }}>Watch</h2>
                    <div className="icon_nav"><RiSettings5Fill size={25}></RiSettings5Fill></div>
                </div>

                <div className="input_search_video" >
                    <BiSearch size={20} style={{ position: 'absolute', marginLeft: '0.8em', fill: "rgb(96, 103, 112)" }}></BiSearch>
                    <input type="text" name="" id="" placeholder='Search videos' />
                </div>

                <Divider style={{ width: '100%', margin: '3px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '1px' }}></Divider>
            </div>
            <VideoNavigation></VideoNavigation>



        </div>
    )
}
