import React, { useEffect, useState } from 'react'
import Loader from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux'
import { posts } from '../../Services/RequestServices';
import Spinner from '../Loader/Spinner';
import Post from './Post'

function PostList() {

    const { RX_POST } = useSelector((state) => state);

    const [isBottom, setIsBottom] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(posts.getAll(0));

    }, [dispatch]);



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
      

        if (isBottom) {
            RX_POST.nextPage !== false && dispatch(posts.getNewPost(RX_POST.nextPage));

        }

    }, [isBottom, dispatch, RX_POST.nextPage]);



    const postsComponents = RX_POST.posts.map((p, i) => <Post key={p.id} post={p} />);

    return (
        <div className='post_list' >
            {RX_POST.get_post_start && <Spinner classes="spinner" type="TailSpin" color=" rgb(23, 113, 230)" height={40} width={40} />}
            {RX_POST.get_post_failed && <h3 style={{ textAlign: 'center', color: 'red' }} >Failed to load posts, please check your connection</h3>}
            {(RX_POST.posts.length <= 0 && RX_POST.get_post_success) && <h3 style={{ textAlign: 'center' }} >No post Found</h3>}
            {RX_POST.get_post_success && postsComponents}
            {RX_POST.get_new_post_start && <Loader classes="spinner" type="TailSpin" color=" rgb(23, 113, 230)" height={30} width={30} ></Loader>}
        </div>
    )
}

export default PostList
