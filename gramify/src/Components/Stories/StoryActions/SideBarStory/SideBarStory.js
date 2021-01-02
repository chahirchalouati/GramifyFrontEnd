import React from 'react'
import { RiSettings5Fill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import history from '../../../../Routes/History'
import Divider from '../../../Divider/Divider'

function SideBarStory({ textEditor, setContent, submit, setImageUrl }) {

 const { RX_SIGN_IN: { payload }, RX_STORY: { assets } } = useSelector(state => state);
    return (
        <div className='side_bar_story'>
            <div className="side_bar_story_header">

                <div className="head_story_header">
                    <h2 style={{ fontWeight: '500' }}>Your Story</h2>
                    <div className="icon_nav"><RiSettings5Fill size={25}></RiSettings5Fill></div>
                </div>
                <div className="profile_side">
                    <img src={process.env.REACT_APP_API_URL + payload.user.profile.avatarFile.url} alt={payload.user.profile.avatarFile.url} />
                    <span>{payload.user.fullName}</span>

                </div>

            </div>
            <Divider style={{ width: '100%', margin: '10px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' }}></Divider>

            {
                textEditor && <div className="text_editor_story">
                    <div

                        className='textarea_story'
                        data-placeholder="Start typing "
                        onKeyDown={e => { }} contentEditable={true}
                        onInput={e => { setContent(e.currentTarget.textContent); e.currentTarget.textContent.length > 255 && e.currentTarget.textContent.substr(0, 255) }}>

                    </div>
                    <h4 style={{ margin: '10px 0 10px 0' }}>Backgrounds</h4>
                    <div className="image_model">
                        {
                            assets.map(a => <div key={a.id} className="image_model_item " onClick={e => setImageUrl(a.url)}>
                                <img src={process.env.REACT_APP_API_URL + a.url} alt={a.name} />
                            </div>)
                        }
                    </div>

                </div>

            }


            <div className="form_box">
                <button className='btn_side' onClick={e => history.push("/home")} >Discard</button>
                <button className='btn_side' onClick={e => submit()}>Create</button>

            </div>
        </div>
    )
}

export default SideBarStory
