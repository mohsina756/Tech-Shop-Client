/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Firebase/Firebase.config"

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// import { toast } from "react-toastify";


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

const [loading, setLoading] = useState(true)

const createUser = (email, Password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, Password);
}

const signIn = (email, Password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, Password);
}
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

const handleGoogleLogin = () =>{
    setLoading(false);
return signInWithPopup(auth, googleProvider)
}

const handleLogout = ()=>{
    setLoading(false)
    signOut(auth).then(()=>{
        setUser(null);
        alert('User logged out')
    })
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
            setLoading(false)
        setUser(user)
        } else { 
            setLoading(false)
        }
    })
    return unSubscribe;
}, [])

const values={
    user,
    createUser,
    setUser,
    handleGoogleLogin,
    handleLogout,
    loading,
    signIn,
    signOut,
    logOut,


}

    return (
        
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;