import firebase from 'firebase'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: process.env.NUXT_ENV_API_KEY,
  authDomain: process.env.NUXT_ENV_AUTHDOMAIN,
  databaseURL: process.env.NUXT_ENV_DATABASE,
  projectId: process.env.NUXT_ENV_PROJECT_ID,
  storageBucket: process.env.NUXT_ENV_STORAGE_BUCKET,
  messagingSenderId: process.env.NUXT_ENV_MESSAGING_SENDER,
  appId: process.env.NUXT_ENV_APP_ID,
  measurementId: process.env.NUXT_ENV_MEASUREMENT_ID
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

if (!process.server) {
  firebase.analytics(firebase.apps[0])
}
