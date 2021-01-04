import React from 'react'
import Divider from "../Divider/Divider";
import { BiHappyAlt, ImImages, RiLiveLine } from "react-icons/all";
function CreatePost({ user, open }) {

    const { user: userProfile } = user;

    return (
        <div className='post_creator'>
            <div className="post_creator_header">
                <img src={process.env.REACT_APP_API_URL + userProfile.profile.avatarFile.url} alt="" />
                <div className='post_creator_placeholder' onClick={(e) => { open() }} style={{ cursor: 'pointer' }}>What's in your mind?{userProfile.userName}</div>
            </div>
            <Divider style={{ width: '100%', margin: '10px auto', borderTopColor: 'rgb(228, 230, 235)' }}></Divider>

            <div className="add__post__footer">
                <button className="add__post__footer__button" onClick={(e) => { open() }}><span className="icon"><RiLiveLine style={{ fill: 'red' }} /></span> <span className="text">Go Live</span></button>
                <button className="add__post__footer__button" onClick={(e) => { open() }}><span className="icon"><ImImages style={{ fill: 'green' }} /></span> <span className="text">Image/Video</span></button>
                <button className="add__post__footer__button" onClick={(e) => { open() }}><span className="icon"><BiHappyAlt style={{ fill: 'orange' }} /></span> <span className="text">Feeling/Activity</span></button>

            </div>
        </div>
    )
}

export default CreatePost
