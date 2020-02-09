import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVWr5obHQdJkA8Hd3vf1rycruyKhAF5TU",
    authDomain: "sklep-db.firebaseapp.com",
    databaseURL: "https://sklep-db.firebaseio.com",
    projectId: "sklep-db",
    storageBucket: "sklep-db.appspot.com",
    messagingSenderId: "511264996540",
    appId: "1:511264996540:web:60c1b200d6c4a18391e4b9",
    measurementId: "G-VM8569JM1X"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
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
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;