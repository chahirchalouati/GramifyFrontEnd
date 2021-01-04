import React, { useEffect, useState } from 'react'

function MessageUserBox({ user }) {

    const [ShowUserDetailsBox, setShowUserDetailsBox] = useState(false);




    return (
        <div className="message_user_profile"
            onMouseOverCapture={e => setShowUserDetailsBox((ShowUserDetailsBox) => true)}
            onMouseOutCapture={e => setShowUserDetailsBox((ShowUserDetailsBox) => false)}
        >

            <div className="image_icons">
                <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt="" />
                <span className='active_chat'></span>
            </div>

            <div className="username">{user.fullName}</div>

            { ShowUserDetailsBox && <div className="userDetailsBox"></div>}

        </div>
    )
}

export default MessageUserBox
