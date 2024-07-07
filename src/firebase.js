import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwSEYmzmbnwAzGyUF4Iv9BU-sOhW_6bLY",
  authDomain: "voxten-website.firebaseapp.com",
  projectId: "voxten-website",
  storageBucket: "voxten-website.appspot.com",
  messagingSenderId: "709250687641",
  appId: "1:709250687641:web:88865e23c78fb0a6584e08"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const firestore = getFirestore(app);
