import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { likes } from "../../Services/RequestServices";
import PostFooter from "./PostComponents/PostFooter";
import PostHeader from "./PostComponents/PostHeader";
import PostBody from "./PostComponents/PostBody";
export default function Post({ post }) {
    const { user, content, files, createdAt, id, comments, reactions } = post;

    const [openComment, setOpenComment] = useState(false);
    const [showReaction, setShowReaction] = useState(false);
    const [like, setLike] = useState(false);

    const dispatch = useDispatch(); 

    const onLike = () => {
        dispatch(likes.postLike(id));
    };

    const addLike = (bool) => {
        return setLike(b=>bool);
    };

    return (
        <div className="post" onMouseLeave={(e) => setShowReaction(false)}>
            <PostHeader user={user} createdAt={createdAt} />
            <PostBody content={content} files={files} />
            <PostFooter
                addLike={addLike}
                reactions={reactions}
                showReaction={showReaction}
                comments={comments}
                openComment={openComment}
                setOpenComment={setOpenComment}
                setShowReaction={setShowReaction}
                onLike={onLike}
                id={id}
                like={like}
            />
        </div>
    );
}
