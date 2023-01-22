import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBpuWf9hRKV3OQQl-XussjksvjCWGgxB-8",
    authDomain: "sabr-7168e.firebaseapp.com",
    projectId: "sabr-7168e",
    storageBucket: "sabr-7168e.appspot.com",
    messagingSenderId: "549727818351",
    appId: "1:549727818351:web:6e43d7ebd2348e60bff39a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };