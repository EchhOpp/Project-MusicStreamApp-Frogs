import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from '@env';
import { Platform } from 'react-native';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

let auth;
if (Platform.OS === 'web') {
  auth = getAuth(FIREBASE_APP);
  auth.setPersistence(browserLocalPersistence);
} else {
  try {
    auth = initializeAuth(FIREBASE_APP, {
      persistence: getReactNativePersistence(AsyncStorage),
    });
  } catch (e) {
    if (e.code === 'auth/already-initialized') {
      auth = getAuth(FIREBASE_APP);
    } else {
      throw e;
    }
  }
}


export const FIREBASE_AUTH = auth;
export const FIREBASE_DB = getFirestore(FIREBASE_APP);