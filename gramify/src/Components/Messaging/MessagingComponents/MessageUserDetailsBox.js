import React from 'react'
import { IoHome, IoLocationSharp } from 'react-icons/all'

export default function MessageUserDetailsBox({ user, show }) {
    if (show) {
        return (
            <div className="userDetailsBox" >
                <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt="" />
                <div className="user_details_image_box">
                    <div className="username">{user.fullName}</div>
                    <div className="location">
                        <IoHome size={25} fill={"rgb()"} />
                        <span className='location_text'>Live {" "}
                         <span className="location_underline"> kitchen ,Home</span>
                        </span>
                    </div>
                    <div className="location">
                        <IoLocationSharp size={25} fill={"rgb()"} />
                        <span className='location_text'>From {" "}
                         <span className="location_underline"> kitchen ,Home</span>
                        </span>
                    </div>
                </div>

            </div>

        )
    }
    return <></>

}
