import { FirebaseApp } from '@firebase/app'
import { initializeApp } from 'firebase/app'
import config from './firebase-config'
import { getFirestore } from 'firebase/firestore'

// Get a Firestore instance
export const app: FirebaseApp = initializeApp(config)

// export the firestore db
export default getFirestore(app)
