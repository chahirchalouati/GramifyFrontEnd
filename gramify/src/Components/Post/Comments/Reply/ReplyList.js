import React from 'react'
import Reply from './Reply'

function ReplyList({ replies }) {

    const rps = replies.map(r => <Reply key={r.id} reply={r} />)
    return (
        <div className='reply_list'>{rps}</div>
    )
}

export default ReplyList
