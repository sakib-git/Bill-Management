import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../FireBase/Firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
    

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

     const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOUt = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData = {
signIn,
setUser,
user,
createUser,
LogOUt,
loading
  }
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>

};

export default AuthProvider;