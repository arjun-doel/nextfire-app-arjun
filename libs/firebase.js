import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCuEKSiHzbT1jPBttfvZcbTROmJnL_xi2A",
  authDomain: "nextfire-app-2f423.firebaseapp.com",
  projectId: "nextfire-app-2f423",
  storageBucket: "nextfire-app-2f423.appspot.com",
  messagingSenderId: "664494841973",
  appId: "1:664494841973:web:80c59bcd78da34dc4a983c",
  measurementId: "G-TLRJV5CWZY"
};

if (!firebase.getApps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
