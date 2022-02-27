
import { useEffect, useState } from 'react';
import Authentication from './FirebaseInitialize';
import { getAuth,
        signInWithPopup,
       GoogleAuthProvider,
       signInWithEmailAndPassword,
       createUserWithEmailAndPassword,
       onAuthStateChanged,
       signOut,
       updateProfile 
      } from "firebase/auth";

Authentication();

const FirebaseAuthentication =()=>{
  const [user,setUser]=useState({})

  const [error,setError]=useState('')

  const auth = getAuth();
  const googleProvider =new GoogleAuthProvider();

  const GoogleWithsignIn = ()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      setUser(result.user)
      console.log(result.user)
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  const Login =(email,password)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
      setUser(result.user)
    })
    .catch(error =>{
      setError(error.message)
    })
  }

  const LogOut = ()=>{
    signOut(auth)
    .then(()=>{
      setUser('')
    })
  }

  const Register =(email,password) =>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(result =>{
      setUser(result.user)
    })
    .catch(error=>{
      setError(error.message)
    })
  }

  const UpdateName =(name)=>{
    updateProfile(auth.currentUser, {displayName: name} )
    .then(result =>{ }
      )
    
  }

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }
    })
  },[])

return{
  GoogleWithsignIn,
  user,
  Login,
  Register,
  error,
  LogOut,
  UpdateName
}
}

export default FirebaseAuthentication;