import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCuEKSiHzbT1jPBttfvZcbTROmJnL_xi2A",
  authDomain: "nextfire-app-2f423.firebaseapp.com",
  projectId: "nextfire-app-2f423",
  storageBucket: "nextfire-app-2f423.appspot.com",
  messagingSenderId: "664494841973",
  appId: "1:664494841973:web:80c59bcd78da34dc4a983c",
  measurementId: "G-TLRJV5CWZY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export const firestore = firebase.firestore();
export const storage = firebase.storage();


/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}