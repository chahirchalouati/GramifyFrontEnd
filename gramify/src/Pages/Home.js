import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Components/NavBar/NavBar";
import CreatePost from "../Components/Post/CreatePost";
import PostList from "../Components/Post/PostList";
import PostModal from "../Components/Post/PostModals/PostModal";
import StoryList from "../Components/Stories/StoryList";


import history from "../Routes/History";
import { accessType, getAsstes, posts, stories } from "../Services/RequestServices";



export default function Home() {
    const { RX_SIGN_IN, RX_POST, } = useSelector(state => state)

    const [gate, setGate] = useState({ openModalPost: false })
    const dispatch = useDispatch();
    const openModalPost = () => setGate({ ...gate, openModalPost: !gate.openModalPost })


    useEffect(() => {
        if (!RX_SIGN_IN.profile_hasSuccess) {
            history.push("/profile")
        } else {
            dispatch(accessType.getAll());
            dispatch(posts.getAll());
            dispatch(stories.getAll());
            dispatch(getAsstes.getAll());
        }


    }, [RX_SIGN_IN.profile_hasSuccess, dispatch])



    return (
        <>
            <NavBar></NavBar>
            <StoryList />
            <CreatePost open={openModalPost} user={RX_SIGN_IN.payload} />
            {gate.openModalPost && <PostModal open={openModalPost} user={RX_SIGN_IN.payload} />}
            {RX_POST.get_post_success && <PostList />}




        </>
    );
}
