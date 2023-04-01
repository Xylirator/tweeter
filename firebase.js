import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyC3-MswNOW3GmETvT1923S4GVJUNdMLVi0",
  authDomain: "tweeter-9113f.firebaseapp.com",
  projectId: "tweeter-9113f",
  storageBucket: "tweeter-9113f.appspot.com",
  messagingSenderId: "677203223511",
  appId: "1:677203223511:web:6b01d5325db0888ea36192",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
