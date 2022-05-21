// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX-K_VCTFyoe5o3Q_bQeR-mBMe2_XXB4U",
    authDomain: "studentprofile-d7a4e.firebaseapp.com",
    projectId: "studentprofile-d7a4e",
    storageBucket: "studentprofile-d7a4e.appspot.com",
    messagingSenderId: "130771395665",
    appId: "1:130771395665:web:843cbcbdb9eec3faab0470"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default  getFirestore();