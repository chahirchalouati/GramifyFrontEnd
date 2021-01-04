import React, { useEffect, useState } from 'react';
import { batch, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import CreatePost from '../Components/Post/CreatePost';
import PostList from '../Components/Post/PostList';
import PostModal from '../Components/Post/PostModals/PostModal';
import StoryList from '../Components/Stories/StoryList';
import MessageContainer from "../Components/Messaging/MessageContainer";
import { accessType, getAsstes, stories } from '../Services/RequestServices';


export default function Home() {

    const { RX_SIGN_IN, RX_STORY } = useSelector(state => state);

    const [gate, setGate] = useState({ openModalPost: false });

    const openModalPost = () => setGate({ ...gate, openModalPost: !gate.openModalPost });

    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(accessType.getAll());
            dispatch(stories.getAll());
            dispatch(getAsstes.getAll());
        });

    }, [dispatch])

    if (!RX_SIGN_IN.profile_hasSuccess) {
        return <Redirect to='/profile'></Redirect>;
    }

    if (RX_SIGN_IN.profile_hasSuccess) {

        return (
            <>  <NavBar />
                <StoryList />
                {  RX_STORY.get_story_success && <CreatePost open={openModalPost} user={RX_SIGN_IN.payload} />}
                {gate.openModalPost && <PostModal open={openModalPost} user={RX_SIGN_IN.payload} />}
                <PostList />
                <MessageContainer />


            </>
        );
    }
}
