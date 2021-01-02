import React from 'react'
import PostMedia from "../PostMedia/PostMedia";
import Content from "../PostContent/Content";

export default function PostBody({ files, content }) {
    return (
        <div className="post_body">

            <Content content={content}></Content>
            <PostMedia files={files}></PostMedia>

        </div>

    )
}
