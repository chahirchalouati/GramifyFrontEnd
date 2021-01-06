import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import history from '../../Routes/History'
export default function AddStory() {
    const { RX_SIGN_IN: { payload } } = useSelector(state => state)
    return (
        <div className='add_story' onClick={e => history.push('/create/story')}>
            <img src={process.env.REACT_APP_API_URL + payload.user.profile.avatarFileResized.url} alt="" />

            <div className="btn_add"
                style={{ border: '0.3em solid white', borderRadius: '50%', background: 'white' }} >
                <BsFillPlusCircleFill size={30} fill={"rgb(23, 113, 230)"} ></BsFillPlusCircleFill>
            </div>

            <div className="text_story" >Create a story</div>
        </div>
    )
}
