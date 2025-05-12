import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDIpz7wW3MHgHB-hPSbpx7010HgtBpi12U",
  authDomain: "olxclone-18ac3.firebaseapp.com",
  projectId: "olxclone-18ac3",
  storageBucket: "olxclone-18ac3.firebasestorage.app",
  messagingSenderId: "755057382697",
  appId: "1:755057382697:web:89742a3234f233b9751338",
  measurementId: "G-G5SBSYZL1Y"
};

const app=initializeApp(firebaseConfig)

export const db=getFirestore(app)
export const storage=getStorage(app)