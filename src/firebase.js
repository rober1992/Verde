import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfHTC2UKYcw_tqMqYONmIODXZgfKlaqws",
  authDomain: "verde-17589.firebaseapp.com",
  projectId: "verde-17589",
  storageBucket: "verde-17589.appspot.com",
  messagingSenderId: "542753103101",
  appId: "1:542753103101:web:6f480c4acf74aeaa547294"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export default db