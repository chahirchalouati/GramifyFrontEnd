import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../../../Services/RequestServices';
import Divider from '../../Divider/Divider'
import Spinner from '../../Loader/Spinner';
import AddToPost from './AddToPost';

function PostModal({ user, open }) {

    const dispatch = useDispatch();


    const [height, setHeight] = useState(1);

    const { user: userProfile } = user;

    const { RX_ACCESS_TYPE: { accessTypes }, RX_POST } = useSelector(state => state);

    const [request, setRequest] = useState({ content: '', files: [], disabled: true, accessType: '', filesmMedia: [] });

    const addFiles = (e) => {
        setRequest({
            ...request, files: e.target.files, filesmMedia: () => {
                let files = [];
                for (let i = 0; i < e.target.files.length; i++) {
                    if (e.target.files[i].type.startsWith("image")) {
                        files.push(<img alt={e.target.files[i].name} key={i} src={URL.createObjectURL(e.target.files[i])} />)
                    } if (e.target.files[i].type.startsWith("video")) {
                        files.push(<video key={i} src={URL.createObjectURL(e.target.files[i])} controls />)
                    }

                }
                return files
            }
        })
    }

    const { files, content } = request;
    useEffect(() => {
        const isDisabled = () => {

            if (files.length > 0 || content.length > 0) {
                setRequest(request => ({ ...request, disabled: false }));
            } else {
                setRequest(request => ({ ...request, disabled: true }));
            }
        };
        isDisabled();
    }, [files, content]);


    const onSubmit = () => {

        let formData = new FormData();
        for (let index = 0; index < request.files.length; index++) {
            formData.append("files", request.files[index]);
        }
        formData.append("content", request.content);
        formData.append("accessType", request.accessType);

        dispatch(posts.post(formData));
        open();
    }
    const autoFitContent = ({ value, scrollHeight }) => {
        setHeight((scrollHeight));

        if (value.length <= 0) {
            setHeight((0));
        }

    }

    return (
        <div className='post_modal'>
            <div className="post_modal_box">
                <div className="post_modal_box_header">
                    <div className="title_header">Create post</div>
                    <div className="icon_nav" onClick={e => { open() }}><IoMdClose size={28} style={{ fill: 'lightslategray' }}></IoMdClose></div>
                </div>
                <Divider style={{ width: '100%', margin: '10px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' }}></Divider>
                <form className="post_modal_box_body">

                    <div className="post_modal_box_body_header">
                        <img src={process.env.REACT_APP_API_URL + userProfile.profile.avatarFile.url} alt={userProfile.profile.avatarFile.name} />
                        <div className="access_box">
                            <div className="user_name">{userProfile.fullName}</div>
                            <select name="accessTypes" onChange={e => setRequest({ ...request, accessType: e.target.value })}>
                                {accessTypes.map(a => <option key={a.id} value={a.type}>{a.type}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="post_modal_box_body_body">
                        <textarea style={{ height: height + 'px', minHeight: '2.5em', maxHeight: '10em' }} placeholder={"What's in your mind?" + userProfile.userName} onChange={e => { setRequest({ ...request, content: e.target.value }); autoFitContent(e.target) }}></textarea>

                        <div className="media_to_add">
                            {request.files.length > 0 && request.filesmMedia()}
                        </div>


                    </div>

                    <div className="post_modal_box_body_footer">
                        <AddToPost addFiles={addFiles}></AddToPost>
                        <button onClick={e => onSubmit()} type='button' className={request.disabled ? 'button_disabled' : 'regular_button_disabled'} disabled={request.disabled}>
                            {RX_POST.create_post_start ? <Spinner classes="spinner" type="TailSpin" color=" rgb(23, 113, 230)" height={40} width={40} ></Spinner> : <span>Post</span>}
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default PostModal
