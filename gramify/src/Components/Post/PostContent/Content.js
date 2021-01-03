import React, { useState } from 'react'

export default function Content({ content }) {

    const [readMore, setReadMore] = useState(false);

    if (content && content.length > 0) {

        if (content.length > 200) {
            return <div className="content">
                {readMore ? content : content.substr(0, 300)}
                <span style={{ fontWeight: 'bold', cursor: 'pointer' }}
                    onClick={e => setReadMore(!readMore)}>{readMore ? ' SeeLess' : ' ...SeeMore '}</span>
            </div>
        } else {
            return <div className="content">{content}</div>
        }



    }
    return (<></>)


}
