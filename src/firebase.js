import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDuJ4phOABeM7i1iUTli4n8e_RMcDoK71o",
  authDomain: "shopee-achadinhos.firebaseapp.com",
  projectId: "shopee-achadinhos",
  storageBucket: "shopee-achadinhos.appspot.com",
  messagingSenderId: "301418025629",
  appId: "1:301418025629:web:c5935ed37dd66a2763ba74",
  measurementId: "G-7GQTP024NL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;