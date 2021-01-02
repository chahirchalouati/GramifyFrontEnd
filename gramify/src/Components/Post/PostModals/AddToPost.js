import React, { createRef } from 'react'
import { AiOutlineFileGif } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillPersonCheckFill } from 'react-icons/bs'
import { HiLocationMarker } from 'react-icons/hi'
import { ImImages } from 'react-icons/im'
import { VscSmiley } from 'react-icons/vsc'

export default function AddToPost({ addFiles }) {
    const fileInput = createRef();
    return (
        <div className="add_to_your_post">

            <div className="add_text">Add to your post</div>

            <div className="option_box">
                <input ref={fileInput} onChange={e =>addFiles(e)} style={{ position: 'absolute', width: '2em', height: '2em', cursor: 'pointer', opacity: '0', display: 'none' }} accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" multiple={true} type="file"></input>
                <div className="icon_box" onClick={e => fileInput.current.click()}> <ImImages size={25} fill={"rgb(73, 183, 99)"} /></div>
                <div className="icon_box" > <BsFillPersonCheckFill size={25} fill={"rgb(14, 101, 222)"} /></div>
                <div className="icon_box"> <VscSmiley size={25} fill={"orange"} /></div>
                <div className="icon_box"> <HiLocationMarker size={25} fill={"red"} /></div>
                <div className="icon_box"> <AiOutlineFileGif size={25} fill={"rgb(40, 177, 158)"} /></div>
                <div className="icon_box" > <BiDotsHorizontalRounded size={25} fill={"gray"} />  </div>


            </div>

        </div>
    )
}
