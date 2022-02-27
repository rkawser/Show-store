import React, { createContext } from 'react'
import FirebaseAuthentication from './../Footer/Firebase/Firebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

 const allContext=FirebaseAuthentication();

  return (
    <AuthContext.Provider value={allContext}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider