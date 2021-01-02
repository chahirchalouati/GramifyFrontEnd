import React from "react";
import { useSelector } from "react-redux";
import AddComment from "./AddComment";
import Comment from "./Comment";

export default function CommentList({ postID, comments }) {
    const { RX_SIGN_IN } = useSelector((state) => state);

    return (
        <div className="comment_list">
            <AddComment profile={RX_SIGN_IN.payload.user} id={postID}></AddComment>

            {comments.length <= 0 && (
                <p style={{ margin: "0px auto" }}>No Comment found </p>
            )}
            {comments.map((c) => (
                <Comment key={c.id} comment={c} />
            ))}
        </div>
    );
}
