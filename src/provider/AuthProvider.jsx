import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user is present or not 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setuser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    // user create sign up
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
       
    }

    // login or sign in 

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };

    //log out or sign out
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo = {
        user,
        createUser,
        loading,
        login,
        logout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;