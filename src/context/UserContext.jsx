import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth}from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

 export const AuthContext = createContext()

const UserContext = ({children}) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(email,password)
    }
    const userInfo = {name:"Biddut Hassan"};
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;