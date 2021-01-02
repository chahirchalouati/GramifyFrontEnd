import React from "react";

import { IoText } from "react-icons/io5";

function StoryTextContent({ seTextEditor, setPreview }) {
    return <div className="story_text_content">
        <div className="story_icon" onClick={e => { seTextEditor(true); setPreview(true) }}>
            <IoText size={25}></IoText>
        </div>
        <h4 style={{ color: 'white' }}>Create a text story</h4>
    </div>;
}

export default StoryTextContent;
