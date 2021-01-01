import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect} from "react-router-dom";
import Loader from "../Components/Loader/Spinner";
import { FcGoogle, GrFacebook, SiTwitter } from 'react-icons/all';
import { authentifications } from "../Services/RequestServices";
import { AUTH_TYPES } from "../Redux/Types";

const SignIn = () => {

 const dispatch = useDispatch()

  const { register, handleSubmit, errors } = useForm();

  const {RX_SIGN_IN,RX_SIGN_UP} = useSelector((state) => state); 

  
/*
  useEffect(() => {
     RX_SIGN_IN.isAuthenticated  && !RX_SIGN_IN.profile_hasSuccess&& history.push("/profile")
     RX_SIGN_IN.isAuthenticated &&RX_SIGN_IN.profile_hasSuccess&& history.push('/home')

  }, [ RX_SIGN_IN.isAuthenticated, RX_SIGN_IN.profile_hasSuccess])
*/

  const submit = (data) => {
    dispatch(authentifications.signIn(data))
  }   

  if (RX_SIGN_IN.isAuthenticated  && !RX_SIGN_IN.profile_hasSuccess) {
    return <Redirect  to="/profile"  />
  }

  if (RX_SIGN_IN.isAuthenticated &&RX_SIGN_IN.profile_hasSuccess) {
    return <Redirect  to='/home'  />
  }

 


  return (
    <div  className="sign-page" onSubmit={handleSubmit(submit)}>
      
      <div className="header">
      
        <div className="header_content">
          <h2>Welcome Back to Gramify</h2>
        </div>

      </div>
   
      <div className="body">
       
        <form>
          {RX_SIGN_IN.isFailed &&<p className="error-text" style={{width:'100%', textAlign:'center',fontSmooth:"always",fontWeight:'bold', fontSize:'18px'}}>{RX_SIGN_IN.error.data.message}</p>}
          {RX_SIGN_UP.hasSuccess &&<p className="error-text" style={{width:'100%', textAlign:'center',fontSmooth:"always",fontWeight:'bold', fontSize:'18px', color:'green'}}>Please Sign-in</p>}
         
         
         
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input style={{ border: errors.param ? "1px solid red" : "none" }} type="email" name="param" ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, })} />
            {errors.param?.type === "required" && <span className="error-text">E-mail can't be blank </span>}
            {errors.param?.type === "pattern" && <span className="error-text">Invalid e-mail address</span>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Password</label>
            <input style={{ border: errors.password ? "1px solid red" : "none" }} type="password" name="password" 
            ref={register({ required: true, maxLength: 32, minLength: 8 })} />
            {errors.password?.type === "minLength" && (<span className="error-text">Minimum length is 8 characters </span>)}
            {errors.password?.type === "maxLength" && (<span className="error-text">Maximum length is 32 characters</span>)}
            {errors.password?.type ==="required" && (<span className="error-text">Password can't be blank</span>)}
          </div>
         
          {RX_SIGN_IN.isLoading ? (<Loader classes="spinner" type="TailSpin" color=" rgb(23, 113, 230)" height={30} width={30} ></Loader>) : (<button type="submit" className='btn-primary'> <span>Sign-In</span> </button>)}
       
          <Link to="/signup" onClick={e=> dispatch({type:AUTH_TYPES.SIGN_UP_RESET})}>Create new account</Link>
         
          <div className="social_sign-up">
           
            <h4>Sign-In width</h4>
           
            <div className="icon_list">
              <Link to='/'><FcGoogle size={25} /></Link>
              <Link to='/'><GrFacebook size={25} /></Link>
              <Link to='/'><SiTwitter size={25} /></Link>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
};

export default SignIn;
