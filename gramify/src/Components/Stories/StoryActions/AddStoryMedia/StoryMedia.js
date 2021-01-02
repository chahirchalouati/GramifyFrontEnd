import React, { useRef } from "react";
import { ImImages } from "react-icons/im";

export default function StoryMedia({ setStory, setPreview }) {

  const input = useRef();

  const onChange = (e) => {
    setStory(e);
    setPreview(true);
  };



  return <div className="story_media">

    <input accept={'image/*'} style={{ display: 'none' }} onChange={e => onChange(e)} type="file" ref={input} />

    <div className="story_icon" onClick={e => input.current.click()}>
      <ImImages size={25}></ImImages>
    </div>
    <h4 style={{ color: 'white' }}>Create a photo story</h4>


  </div>;
}
