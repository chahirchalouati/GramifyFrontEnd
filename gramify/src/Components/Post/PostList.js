import React from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../Loader/Spinner';
import Post from './Post'

function PostList() {

    const { RX_POST } = useSelector((state) => state);
    return (
        <div className='post_list'>
            {RX_POST.get_post_start && <Spinner classes="spinner" type="TailSpin" color=" rgb(23, 113, 230)" height={40} width={40} />}
            {RX_POST.get_post_failed && <h3 style={{ textAlign: 'center', color: 'red' }} >Failed to load posts, please check your connection</h3>}
            {RX_POST.posts.length <= 0 && <h3 style={{ textAlign: 'center' }} >No post Found</h3>}
            {RX_POST.posts.map(p => <Post key={p.id} post={p} />)}
        </div>
    )
}

export default PostList
