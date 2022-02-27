import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Login.css';
import { FcGoogle} from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import FirebaseAuthentication from './../Footer/Firebase/Firebase';
import useAuth from './../PrivateRoute/UseAuth';


const Login = () => {
   const {GoogleWithsignIn} =useAuth();
   const { register, handleSubmit } = useForm();
   const onSubmit = data => console.log(data);
    
  return (
    <>
    <Container>
        <div>
            <h2 className='login-text'>Login</h2>
        </div>
    <form className='login-from' onSubmit={handleSubmit(onSubmit)}>
      <input type="email" {...register("Email")} placeholder='Email'/>
      <input type="password" {...register("Password")} placeholder='Password'/>
      <input className='login-button' type="submit" />
      <h5 className='text-white'>New User <Link to='/register'>Please Register</Link></h5>
      
      <div>
        <button onClick={GoogleWithsignIn} className='google-button' ><FcGoogle/> Google sign In</button>
        <button className='facebook-button'><FaFacebookF className='text-white'/> facebook sign In</button>
      </div>
    </form>
   
    </Container> 
    </>
  )
}

export default Login;