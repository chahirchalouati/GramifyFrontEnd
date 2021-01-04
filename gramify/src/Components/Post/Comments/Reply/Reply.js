import React from 'react'
import moment from 'moment'
function Reply({ reply }) {

    return (
        <div className='reply'>
            <div className="reply_header">
                <img src={process.env.REACT_APP_API_URL + reply.user.profile.avatarFile.url} alt={reply.user.profile.avatarFile.name} />
                <div className="reply_content">
                    <div className="reply_user_name">{reply.user.fullName} </div>
                    <p className="content_reply">{reply.content}</p>
                </div>
            </div>
            <div className="comment_action" style={{ marginTop: '3px' }}>
                <span className="btn_reply">Reply</span>
                <span className="btn_reply">Like</span>.<span style={{ fontWeight: '400', fontSize: '12px', color: 'rgb(118, 120, 123)' }}>{moment(reply.createdAt).fromNow()}</span>
            </div>
        </div>
    )
}

export default Reply
