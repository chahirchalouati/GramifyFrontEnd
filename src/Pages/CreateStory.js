import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../Components/NavBar/NavBar";
import StoryMedia from "../Components/Stories/StoryActions/AddStoryMedia/StoryMedia";
import StoryTextContent from "../Components/Stories/StoryActions/AddStoryTextContent/StoryTextContent";
import Preview from "../Components/Stories/StoryActions/Preview/Preview";
import SideBarStory from "../Components/Stories/StoryActions/SideBarStory/SideBarStory";
import history from "../Routes/History";
import { stories } from "../Services/RequestServices";


function CreateStory() {

    const [story, setStory] = useState({ content: '', file: '', imageUrl: 'http://localhost:8080/files/Valerie/5ea91edb-7166-42cf-a35c-bea77998f269.jpg' });

    const [textEditor, seTextEditor] = useState(false);
    const [preview, setPreview] = useState(false);

    const dispatch = useDispatch();

    const setFile = (e) => {
        setStory({ file: e.target.files[0] })
    }

    const setImageUrl = (url) => {
        setStory({ ...story, imageUrl: url })
    }

    const setContent = (text) => {
        setStory({ ...story, content: text })
    }






    const onSubmit = () => {

        var formData = new FormData();

        if (story.file) {
            formData.append("file", story.file);
            dispatch(stories.post(formData))
        }
        if (story.content != null || undefined) {
            formData.append('content', story.content);
            formData.append('imageUrl', story.imageUrl)
            dispatch(stories.post(formData))
        }

        history.push("/home");

    }

    return (
        <div className='create_story_container'>
            <NavBar />
            <SideBarStory setImageUrl={setImageUrl} textEditor={textEditor} setContent={setContent} submit={onSubmit} />
            <div className="create_story_card_container">

                {
                    preview ?
                        <Preview imageUrl={story.imageUrl} files={story.file} text={story.content || ''} textEditor={textEditor}></Preview> : <>
                            <StoryMedia setStory={setFile} setPreview={setPreview} />
                            <StoryTextContent setPreview={setPreview} seTextEditor={seTextEditor} />
                        </>
                }


            </div>
        </div>
    );
}

export default CreateStory;
