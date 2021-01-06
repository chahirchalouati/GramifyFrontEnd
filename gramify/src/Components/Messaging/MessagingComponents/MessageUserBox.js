import React, { useState } from 'react'
import MessageUserDetailsBox from './MessageUserDetailsBox';

function MessageUserBox({ user }) {

    const [ShowUserDetailsBox, setShowUserDetailsBox] = useState(false);




    return (



        <div className="message_user_profile"
            onMouseOver={e => setShowUserDetailsBox((ShowUserDetailsBox) => true)}
            onMouseOut={e => setShowUserDetailsBox((ShowUserDetailsBox) => false)}
        >

            <div className="image_icons">
                <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt="" />
                <span className='active_chat'></span>
            </div>

            <div className="username">{user.fullName}</div>
            <MessageUserDetailsBox user={user} show={ShowUserDetailsBox} />

        </div>
    )
}

export default MessageUserBox
