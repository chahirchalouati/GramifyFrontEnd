import moment from 'moment'
import React, { useState } from 'react'
import AddReply from './Reply/AddReply';
import { CgCornerDownRight } from "react-icons/all";

export default function Comment({ comment: { post, user, id, createdAt, content, replies } }) {


    const [openReply, setOpenReply] = useState(false);




    return (
        <div className='comment'>
            <div className="comment_header">
                <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt={user.profile.avatarFile.name} />
                <div className="comment_content">
                    <div className="user_name">{user.fullName} </div>
                    <p className="content_comment">{content}</p>
                </div>
            </div>
            <div className="comment_action" style={{ marginTop: '3px' }}>
                <span className="btn_reply" onClick={e => { setOpenReply(!openReply) }}>Reply</span>
                <span className="btn_reply">Like</span>.<span style={{ fontWeight: '400', fontSize: '12px', color: 'rgb(118, 120, 123)' }}>{moment(createdAt).fromNow()}</span>


            </div>
            {(replies != null && replies.length > 0) && <p className="comment_action" style={{ color: 'lightslategray', fontSize: '12px' }}> <CgCornerDownRight />  {replies.length} Reply</p>}



            { openReply && <AddReply id={id}></AddReply>}




        </div>
    )
}
