import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../../Services/RequestServices';
import Post from '../Post/Post';

export default function VideoContainer() {
    const { RX_POST } = useSelector((state) => state);

    const dispatch = useDispatch();

    const postsComponents = RX_POST.posts.map((p, i) => <Post key={p.id} post={p} />);
    useEffect(() => {
        dispatch(posts.getAll(0));

    }, [dispatch]);
    return (
        <div className="videoContainer"
            style={{ width: '50%', marginLeft: "auto", marginRight: 'auto', paddingTop: '1em' }}>
            {postsComponents}
        </div>
    )
}
