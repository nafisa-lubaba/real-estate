import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import  {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const AuthContext =createContext(null)

const googleProvider = new GoogleAuthProvider();


const FirebaseProvider = ({children}) => {
    const [user , setUser] = useState(null)
    console.log(user)
    const createUser =(email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =() =>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
             
            } 
          });
          

    },[])




    const allValues = {
        createUser,
        signInUser,
        googleLogin
    }
 
    return (
      <AuthContext.Provider value={allValues}>
        {children}
      </AuthContext.Provider>
    );
};

export default FirebaseProvider;