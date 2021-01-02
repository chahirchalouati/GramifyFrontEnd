import React from 'react'

import moment from "moment";
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FaUserFriends } from 'react-icons/fa';



export default function PostHeader({ user , createdAt}) {
    return (
        <div className="post_header">
            <div className="post_profile_box">
                <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt="" />
                <div className="user_info">
                    <div className="username">{user.fullName}</div>
                    <div className="createdAt">
                        <span>{moment(createdAt).fromNow()}.<FaUserFriends /></span>
                    </div>
                </div>
            </div>
            <div className="icon_box" > <BiDotsHorizontalRounded size={25} fill={"gray"} />  </div>
        </div>
    )
}
