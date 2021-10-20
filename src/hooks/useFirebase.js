import { useEffect, useState } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    signOut
} from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.init';
const useFirebase = () => {
    initializeAuthentication();

    const [user, setUser] = useState('');
    const [errorFirebase, setFirebaseError] = useState('');
    const auth = getAuth();

    const signWithEmail = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user);
                verifyEmail();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
                // ..
            });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            // ...
        });
    };

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            });
    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('');
            })
            .catch((error) => {
                // An error happened.
            });
    };
    const resetPass = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
            }
        });
    }, []);

    return {
        user,
        signWithEmail,
        signInWithEmail,
        errorFirebase,
        setFirebaseError,
        logOut,
        resetPass
    };
};

export default useFirebase;
