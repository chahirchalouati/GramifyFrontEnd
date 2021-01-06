import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { comments } from '../../../Services/RequestServices';


export default function AddComment({ profile, id }) {



    const [commentRequest, setRommentRequest] = useState({ content: '', id: id });

    const dispatch = useDispatch();

    const submit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            dispatch(comments.post(commentRequest));
            setRommentRequest({ ...commentRequest, content: '' });
            e.currentTarget.textContent = ''
        }

    }

    return (
        <form className='comment_form'>
            <div className="profile_user">
                <img src={process.env.REACT_APP_API_URL + profile.profile.avatarFileResized.url} alt={profile.profile.avatarFile.name} />
            </div>

            <span data-placeholder="Write a comment ..." className='span_textArea' style={{ padding: '0.5em 1em', minHeight: '2.8em', width: '100%', outLine: "none", whiteSpace: "pre-wrap", overflowWrap: "break-word" }} onKeyDown={e => submit(e)} role="textbox" contentEditable={true} placeholder='hello' onInput={e => setRommentRequest({ ...commentRequest, content: e.currentTarget.textContent })}></span>
        </form>
    )
}
