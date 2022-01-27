import {initializeApp} from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


import firebaseConfig from "./firebase.config";

export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
export const fireAuth = getAuth(firebaseApp);