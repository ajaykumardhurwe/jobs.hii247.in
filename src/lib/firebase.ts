import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj8m1ejJULAqOUyUvrbaPk1egh29rE2Mw",
  authDomain: "mcqna-81f01.firebaseapp.com",
  projectId: "mcqna-81f01",
  storageBucket: "mcqna-81f01.firebasestorage.app",
  messagingSenderId: "209670975983",
  appId: "1:209670975983:web:c8a52a0ce8200cb6ee861a",
  // measurementId: "G-V60JRGRF7B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);














// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   // Replace with your Firebase config
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);