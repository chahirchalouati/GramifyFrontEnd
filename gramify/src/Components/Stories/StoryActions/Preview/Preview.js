import React from 'react'

export default function Preview({ imageUrl, files, text, textEditor }) {

    console.log(imageUrl);


    return (
        <div className='preview_story'>
            <h4>Preview</h4>
            <div className="preview_container">

                {(files && !textEditor) && <img src={URL.createObjectURL(files)} alt="" />}
                {textEditor && <><div className="text_story" data-placeholder="Start typing " style={{ backgroundImage: 'url(' +process.env.REACT_APP_API_URL+ imageUrl + ')' , backgroundSize:'cover' }}>
                    {text.length > 255 ? text.substr(0, 255) : text}</div>
                    {text.length > 255 && <p style={{ margin: 'auto', color: 'red' }}>The text entered exceeds the maximum length 255</p>}
                </>
                }

            </div>



        </div>
    )
}
