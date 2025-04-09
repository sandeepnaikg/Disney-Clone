import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, onSnapshot } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwTCSKISdzzqPwby8eZ3sH-7oMaE3NLCU",
  authDomain: "disney-hotstar-65929.firebaseapp.com",
  projectId: "disney-hotstar-65929",
  storageBucket: "disney-hotstar-65929.appspot.com",
  messagingSenderId: "122357332247",
  appId: "1:122357332247:web:4db738023961200a68df52",
  measurementId: "G-8ZEQJ1BMM0",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
export { db, collection, getDocs, onSnapshot };
