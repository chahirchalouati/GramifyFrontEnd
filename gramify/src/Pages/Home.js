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


    const [isBottom, setIsBottom] = useState(false);



    useEffect(() => {
        if (!RX_SIGN_IN.profile_hasSuccess) {
            history.push("/profile")
        } else {
            dispatch(accessType.getAll());
            dispatch(posts.getAll(RX_POST.nextPage || 0));
            dispatch(stories.getAll());
            dispatch(getAsstes.getAll());
        }


    }, [RX_SIGN_IN.profile_hasSuccess, dispatch])

    function handleScroll() {

        const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;

        if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        (isBottom && !RX_POST.isLast) && dispatch(posts.getNewPost(RX_POST.nextPage));
    }, [isBottom, RX_POST.nextPage, RX_POST.isLast])


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
