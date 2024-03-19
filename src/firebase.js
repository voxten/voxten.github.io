import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3pC1m3zOM7mG486GwkJZvfCYiIAvb4Ow",
  authDomain: "graphics-card-list-project.firebaseapp.com",
  projectId: "graphics-card-list-project",
  storageBucket: "graphics-card-list-project.appspot.com",
  messagingSenderId: "708045138420",
  appId: "1:708045138420:web:54d5f615485a3c9ff9b1a1"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
