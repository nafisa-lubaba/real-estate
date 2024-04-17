import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import  {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider,signOut } from "firebase/auth";
export const AuthContext =createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const FirebaseProvider = ({children}) => {
    const [user , setUser] = useState(null)

    const [loading, setLoading] =useState(true)
    console.log(loading)
    

    const createUser =(email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin =() =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut =()=>{
        setUser (null)
        setLoading(false)
        signOut(auth)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
             
            } 
          });
          return ()=> unsubscribe()

          
          

    },[])




    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut, 
        user,
        loading
    }
 
    return (
      <AuthContext.Provider value={allValues}>
        {children}
      </AuthContext.Provider>
      
    );
};

export default FirebaseProvider;