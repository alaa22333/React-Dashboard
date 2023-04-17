
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAXVUwQeSc0MF_5DBgNXmYZHYXVevyu1pE",
    authDomain: "dashboard-66e7d.firebaseapp.com",
    projectId: "dashboard-66e7d",
    storageBucket: "dashboard-66e7d.appspot.com",
    messagingSenderId: "394644028413",
    appId: "1:394644028413:web:92bc5d85b7ef83f11af794",
    measurementId: "G-KXZ9QJ675N"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const db = getFirestore(app);
export const auth=getAuth(app)


export default app

