import React from 'react'

function PostMedia({ files }) {
    if (files) {
        const mediaFiles = files.map(
            p => {
                if (p.fileType.type.startsWith("image")) {
                    return <img key={p.id} src={process.env.REACT_APP_API_URL + p.url} alt={p.name} />;
                } else if (p.fileType.type.startsWith("video")) {
                    return <video key={p.id} src={process.env.REACT_APP_API_URL + p.url} controls></video>
                }
                return true
            }
        );

        return (
            <div className="media_content" style={{ overflowY: files.length > 1 && "scroll", width: files.length > 0 && "100%", margin: '0px auto', height: files.length > 0 && '30em' }}>
                {mediaFiles}
            </div>
        )
    }
    return <></>

}

export default PostMedia
