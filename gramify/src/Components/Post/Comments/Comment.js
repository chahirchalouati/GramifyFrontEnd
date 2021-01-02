import moment from 'moment'
import React from 'react'

export default function Comment({ comment: { post, user, id, createdAt, content } }) {

    return (
        <div className='comment'>
            <div className="comment_header">
                <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt={user.profile.avatarFile.name} />
                <div className="comment_content">
                    <div className="user_name">{user.fullName} <span className='span_time_comment'>{"." + moment(createdAt).fromNow()}</span></div>
                    <p className="content_comment">{content}</p>

                </div>


            </div>

        </div>
    )
}
