import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyDnb0phrAq9MVBrNn5WPedKU0K7XLxcUew',
    authDomain: 'silverglow-british-shorthair.firebaseapp.com',
    projectId: 'silverglow-british-shorthair',
    storageBucket: 'silverglow-british-shorthair.appspot.com',
    messagingSenderId: '434161184521',
    appId: '1:434161184521:web:c10644eed4d18e096e6dd8',
    measurementId: 'G-377K9SL0KQ'
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth()
