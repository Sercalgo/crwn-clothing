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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exist) {
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
            })
        } catch (error) {
            console.log('error creating user', error.message);

        }
    }
    return userRef;
}
// Initialize Firebase
firebase.initializeApp(config);

// make auth and firestores references
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Create an instance of the Google provider object
const provider = new firebase.auth.GoogleAuthProvider();
// This allows a user who has multiple accounts at the authorization server to select amongst the multiple accounts
provider.setCustomParameters({
    prompt: 'select_account'
});
// To sign in with a pop-up window
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;