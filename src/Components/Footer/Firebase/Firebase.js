
import Authentication from './FirebaseInitialize';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';

Authentication();

const FirebaseAuthentication = ()=>{
  const [user,setUser]=useState({})
  const [error,setError]=useState('')
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const googlesignIn=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      console.log(result.user)
      setUser(result.user)
    })
    .catch(error=>{
      setError(error.message)
    })
 
  }

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
        setUser(user)
      }
    })
  },[]);

  return{
    googlesignIn,
    user,
    error
  }

}

export default FirebaseAuthentication;