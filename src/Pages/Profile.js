import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiCamera } from 'react-icons/all';
import Loader from "../Components/Loader/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { profiles } from "../Services/RequestServices";
import history from "../Routes/History";
const Profile = () => {


    const { register, handleSubmit, errors } = useForm();

    const [inputs, setInputs] = useState({ bgImageV: '', avatarV: '', bgImage: '', avatar: '' });

    const state = useSelector(state => state);

    const dispatch = useDispatch();



    useEffect(() => {
        state.RX_SIGN_IN.profile_hasSuccess && history.push("/home");
    }, [state.RX_SIGN_IN.profile_hasSuccess])






    const onSubmit = (data) => {

        const formdata = new FormData();
        formdata.append("bgImage", inputs.bgImage);
        formdata.append("avatar", inputs.avatar);
        formdata.append("bio", data.bio);
        dispatch(profiles.completeProfile(formdata))
    }

    return (<>

        <form className="profile-box" onSubmit={handleSubmit(onSubmit)}>

            <div className="profile-box-header">

                <div className="bg-image">
                    <img src={inputs.bgImageV || "https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="" />
                    <button className='box-add-image-bg'>Edit cover</button>
                    <input accept={'image/*,image/heif,image/heic'} onChange={(e) => { setInputs({ ...inputs, bgImage: e.target.files[0], bgImageV: URL.createObjectURL(e.target.files[0]) }) }} className='box-add-image-bg' ref={register({ required: true })} name='avatar' style={{ opacity: 0, cursor: 'pointer' }} type="file" />
                </div>

                <div className="avatar-image">
                    <img src={inputs.avatarV || "https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="" />
                    <button className='box-add-image-avatar'><FiCamera size={20}></FiCamera></button>
                    <input accept={'image/*,image/heif,image/heic'} onChange={(e) => { setInputs({ ...inputs, avatarV: URL.createObjectURL(e.target.files[0]), avatar: e.target.files[0] }) }} className='box-add-image-avatar' ref={register({ required: true })} name='bgImage' style={{ opacity: 0, cursor: 'pointer' }} type="file" />
                    <h1>{state.RX_SIGN_IN.payload.user.fullName}</h1>
                </div>
            </div>

            <div className="profile-box-body">

                <h3>Add bio</h3>
                <textarea name="bio" ref={register({ required: true })}  ></textarea>
                <span style={{ color: 'lightslategray', fontWeight: 'bold', fontSize: '11px' }}>max 255 characters</span>

                {errors.avatar && (<span className="error-text">Avatar is required </span>)}
                {errors.bgImage && (<span className="error-text">Background image is required </span>)}
                {errors.bio && (<span className="error-text">Bio is required </span>)}

            </div>



            <div className="profile-box-footer">
                {state.RX_SIGN_IN.profile_isLoading ? <Loader classes="spinner" type="TailSpin" color=" rgb(23, 113, 230)" height={40} width={40} ></Loader> : <button>Complete</button>}
            </div>



        </form>



    </>)
};

export default Profile;
