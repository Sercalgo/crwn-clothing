import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxhRGNCut_ZM1bmRibFmEQNmrfOBiHoA4",
    authDomain: "crwn-db2020.firebaseapp.com",
    databaseURL: "https://crwn-db2020.firebaseio.com",
    projectId: "crwn-db2020",
    storageBucket: "crwn-db2020.appspot.com",
    messagingSenderId: "198235246435",
    appId: "1:198235246435:web:03264b1fe703691e05cd56",
    measurementId: "G-JVZWQQ0NGS"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;