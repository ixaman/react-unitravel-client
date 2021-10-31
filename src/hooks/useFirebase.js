import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = ()=> {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle  = ()=> {
        setIsLoading(true);
         return signInWithPopup(auth, googleProvider)
        .catch ( error => setError(error.message))
        .finally( ()=> setIsLoading(false));

    }

    const logout = ()=> {
        setIsLoading(true);
        signOut(auth)
        .then( ()=>{
            setUser({});
        } )
        .finally( ()=> setIsLoading(false));
    }

    useEffect( ()=> {
        onAuthStateChanged(auth, user => {
            if (user){
                setUser(user);
            }
            setIsLoading(false);
        })
    }, [])

    return {
        user, 
        error,
        isLoading,
        signInWithGoogle,
        logout
    }

}

export default useFirebase;