import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { SiTwitter } from "react-icons/si";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import history from "../Routes/History";
import { authentifications } from "../Services/RequestServices";

const SignUp = () => { 

  const state = useSelector((state) => state);

  const dispatch = useDispatch()
  
  const { register, handleSubmit, errors,watch } = useForm();

  const password = useRef({});

  password.current = watch("password", "");

  const submit = (data) => {
    dispatch(authentifications.singUp(data))
  }  

  const{RX_SIGN_IN, RX_SIGN_UP}= state;

  useEffect(() => {
  
    RX_SIGN_IN.isAuthenticated && history.push('/home') 
    RX_SIGN_UP.hasSuccess && history.push('/')

  }, [ RX_SIGN_IN.isAuthenticated ,  RX_SIGN_UP.hasSuccess])



  return( 
  <div className="sign-page" onSubmit={handleSubmit(submit)}>
  <div className="header">
    <div className="header_content">
      <h2>Sign-Up</h2>
    </div>
  </div>
  <div className="body">
    <form> 
    {RX_SIGN_UP.isFailed &&<p className="error-text" style={{width:'100%', textAlign:'center',fontSmooth:"always",fontWeight:'bold', fontSize:'16px' ,padding:'1em 0.5em'}}>{RX_SIGN_UP.error.data.message}</p>}
       <div className="input-group">
        <label htmlFor="username">User Name</label>
        <input style={{ border: errors.username ? "1px solid red" : "none" }} type="text" name="username" ref={register({ required: true })} />
        {errors.username?.type === "required" && <span className="error-text">username can't be blank </span>}

      </div>
 
        <div className="input-group">
        <label htmlFor="fullname">Full Name</label>
        <input style={{ border: errors.fullname ? "1px solid red" : "none" }} type="text" name="fullName" ref={register({ required: true })} />
        {errors.fullName?.type === "required" && <span className="error-text">full Name can't be blank </span>}

      </div>

      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <input style={{ border: errors.param ? "1px solid red" : "none" }} type="email" name="email" ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
        {errors.email?.type === "required" && <span className="error-text">E-mail can't be blank </span>}
        {errors.email?.type === "pattern" && <span className="error-text">Invalid e-mail address</span>}
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input style={{ border: errors.password ? "1px solid red" : "none" }} type="password" name="password" 
        ref={register({ required: true, maxLength: 32, minLength: 8 })} />
        {errors.password?.type === "minLength" && (<span className="error-text">Minimum length is 8 characters </span>)}
        {errors.password?.type === "maxLength" && (<span className="error-text">Maximum length is 32 characters</span>)}
        {errors.password?.type ==="required" && (<span className="error-text">Password can't be blank</span>)}
      </div> 

    <div className="input-group">
        <label htmlFor="email">Repeat Password</label>
        <input
          name="password_repeat"
          type="password"
          ref={register({
            validate: (value) =>
              value === password.current || "The passwords do not match",
          })}
        />
        {errors.password_repeat && (
          <span className="error-text">{errors.password_repeat.message}</span>
        )}
      </div>

      {RX_SIGN_UP.isLoading ? (<Loader classes="spinner" style={{margin:'auto !important', width:'100%', textAlign:'center'}} type="TailSpin" color=" rgb(23, 113, 230)" height={30} width={30} ></Loader>) : (<button type="submit" className='btn-primary'> <span>Sign-Up</span> </button>)}
    





      <Link to="/">have an account?</Link>
      <div className="social_sign-up">
        <h4>Sign-Up width</h4>
        <div className="icon_list">
          <Link to='/'><FcGoogle size={25} /></Link>
          <Link to='/'><GrFacebook size={25} /></Link>
          <Link to='/'><SiTwitter size={25} /></Link>
        </div>
      </div>

    </form>
  </div>
</div>) 
};

export default SignUp;
