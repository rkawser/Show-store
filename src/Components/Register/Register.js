import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import './Register.css'
const Register = () => {
  const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
     <Container>
        <div>
            <h2 className='login-text'>Register</h2>
        </div>
    <form className='register-from' onSubmit={handleSubmit(onSubmit)}>
     <input type="name" {...register("name")} placeholder='Name'/>
      <input type="email" {...register("Email")} placeholder='Email'/>
      <input type="password" {...register("Password")} placeholder='Password'/>
      <input className='login-button' type="submit" />
      <h5 className='text-white'>Already Register<Link to='/login'>Please Login</Link></h5>
      
      <div>
        <button className='google-button'><FcGoogle/> Google sign In</button>
        <button className='facebook-button'><FaFacebookF className='text-white'/> facebook sign In</button>
      </div>
    </form>
   
    </Container> 
    </>
  )
}

export default Register;