import firebase from "firebase/compat/app"
import { getStorage } from "firebase/storage";

import firebaseConfig from "./firebase.config";

const firebaseApp = firebase.initializeApp(firebaseConfig);


export const storage = getStorage(firebaseApp);
export default firebaseApp;