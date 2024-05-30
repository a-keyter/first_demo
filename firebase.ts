// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8pHDem87Iw1PPilEM4xKIVF209k2Kwr0",
  authDomain: "nextjs-ai-course.firebaseapp.com",
  projectId: "nextjs-ai-course",
  storageBucket: "nextjs-ai-course.appspot.com",
  messagingSenderId: "941404646654",
  appId: "1:941404646654:web:c2d7c5194d3167d1f009af",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Set Database Reference
const db = getFirestore(app);

// Set File Store Reference
const storage = getStorage(app);

// Export Database Ref and Storage Object Ref
export { db, storage };

