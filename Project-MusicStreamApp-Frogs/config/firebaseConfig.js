import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import config from '../eas.json'

const firebaseConfig = {
  apiKey: config.env.FIREBASE_API_KEY,
  authDomain: config.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.env.FIREBASE_DATABASE_URL,
  projectId: config.env.FIREBASE_PROJECT_ID,
  storageBucket: config.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: config.env.FIREBASE_APP_ID,
  measurementId: config.env.FIREBASE_MEASUREMENT_ID,
};

// Khởi tạo ứng dụng Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
export default app;