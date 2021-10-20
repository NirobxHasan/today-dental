import { useEffect, useState } from 'react';
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signOut
} from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.init';
const useFirebase = () => {
    initializeAuthentication();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [user, setUser] = useState('');
    const [errorFirebase, setFirebaseError] = useState('');
    const auth = getAuth();

    const signInWithGoogle = () => {
        console.log('google');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            });
    };
    const signInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            });
    };

    const regWithEmail = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                setUser(userCredential.user);
                verifyEmail();
                setUserName(name);
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
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                // Profile updated!
                // ...
            })
            .catch((error) => {
                // An error occurred
                // ...
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
        signInWithGoogle,
        regWithEmail,
        signInWithEmail,
        errorFirebase,
        setFirebaseError,
        signInWithFacebook,
        logOut,
        resetPass
    };
};

export default useFirebase;
