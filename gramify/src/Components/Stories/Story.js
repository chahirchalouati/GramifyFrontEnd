import React from 'react'


export default function Story({ story }) {

    return (
        <div className='card_story'>
            <div className="profile_box_icon">
                <img className='profile_image_card' src={process.env.REACT_APP_API_URL + story.user.profile.avatarFile.url} alt="" />
            </div>

            {story.file == null && <><img className='main_image_card' src={process.env.REACT_APP_API_URL + story.imageUrl || ""} alt="" /></>}
            {story.file == null && <p className='p_story_card'>{story.content}</p>}
            {story.file != null && <img className='main_image_card' src={process.env.REACT_APP_API_URL + story.file.url || ""} alt="" />}
            <div className="profile_name_user"> {story.user.userName}</div>
        </div>
    )
}
