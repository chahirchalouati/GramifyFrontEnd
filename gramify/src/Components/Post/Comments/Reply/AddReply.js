import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { replies } from '../../../../Services/RequestServices';


const replyStyle = {
    padding: '0.5em 1em',
    minHeight: '2.8em',
    width: '100%',
    outLine: "none",
    whiteSpace: "pre-wrap",
    overflowWrap: "break-word"
}



export default function AddReply({ id }) {

    const [reply, setReply] = useState({ id: id, content: '' });

    const { RX_SIGN_IN: { payload: { user } } } = useSelector(state => state);

    const dispatch = useDispatch();



    const submit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            if (reply.content.length > 0) {
                dispatch(replies.post(reply));
                e.currentTarget.textContent = '';
                setReply({ ...reply, content: '' })
            }
        }
    }

    return (
        <form className='comment_form' style={{ marginTop: '5px', width: '95%', marginLeft: 'auto' }}>
            <div className="profile_user" style={{ width: '2em', height: '2em' }}>
                <img style={{ width: '2em', height: '2em' }} src={process.env.REACT_APP_API_URL + user.profile.avatarFileResized.url} alt={user.profile.avatarFile.name} />
            </div>

            <span data-placeholder="make a reply ..." className='span_textArea'
                style={replyStyle} onKeyDown={e => submit(e)} role="textbox"
                contentEditable={true} placeholder='hello'
                onInput={e => setReply({ ...reply, content: e.currentTarget.textContent })}
            ></span>
        </form>
    )
}
