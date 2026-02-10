import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, updateProfile,
} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState({});
  const [userLoading,setUserLoading]= useState(true)


  const createUser = (email, password) => {
    setUserLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setUserLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

 // update user
 const updateUser = (userInfo)=>{
  setUserLoading(true)
    return updateProfile(auth.currentUser, userInfo)

 }

 const logOut =()=>{
  setUserLoading(true)
    return signOut(auth)
 } 



// tracking
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setUserLoading(false)
    });
    return () => unsubscribe();
}, []);




  const userInfo = {
    createUser,
    signInUser,
    updateUser,
    user,
    logOut,
    userLoading
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
