import { initializeApp } from 'firebase/app'
import { redirect } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDHTtvmnd2pp2J9CHXaPjikk9tn7C2-rs0',
  authDomain: 'onicotecnica-38571.firebaseapp.com',
  projectId: 'onicotecnica-38571',
  storageBucket: 'onicotecnica-38571.appspot.com',
  messagingSenderId: '1084355413931',
  appId: '1:1084355413931:web:93a6207a5ad29de3d034ee',
  measurementId: 'G-LHHHRDJ2S6',
}

initializeApp(firebaseConfig)
const auth = getAuth(initializeApp(firebaseConfig))

export const resetPasswords = (recoveryEmail) => {
  sendPasswordResetEmail(auth, recoveryEmail)
    .then(() => {
      // Password reset email sent successfully
      console.log(
        'Password reset email sent. Check your inbox for instructions.'
      )
      // You may want to redirect or display a success message to the user
    })
    .catch((error) => {
      // Handle password reset errors
      const errorCode = error.code
      const errorMessage = error.message

      console.error('Error code:', errorCode)
      console.error('Error message:', errorMessage)

      // Handle specific error cases if needed
      if (errorCode === 'auth/user-not-found') {
        console.log('No user found with this email address.')
      } else {
        console.log('An unexpected error occurred. Please try again later.')
      }
    })
}

export const signIn = (email, password, swithAuth, setSwitchAuth) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed in
      const user = userCredential.user
      console.log('User signed in:', user)
      localStorage.setItem('Token', user.accessToken)
      const token = localStorage.getItem('Token')
      if (token) {
        setSwitchAuth(!swithAuth)
        console.log(redirect)
      }
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code
      const errorMessage = error.message

      console.error('Error code:', errorCode)
      console.error('Error message:', errorMessage)

      // Handle specific error cases if needed
      if (
        errorCode === 'auth/user-not-found' ||
        errorCode === 'auth/wrong-password'
      ) {
        console.log('Invalid email or password. Please try again.')
      } else {
        console.log('An unexpected error occurred. Please try again later.')
      }
    })
}

export const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully registered user
      console.log(email, password)
      const user = userCredential.user
      console.log('User registered:', user)

      // You may want to do additional tasks like sending a verification email here
    })
    .catch((error) => {
      // Handle registration errors here
      const errorCode = error.code
      const errorMessage = error.message

      // You can log the error details for debugging
      console.error('Error code:', errorCode)
      console.error('Error message:', errorMessage)

      // Handle specific error cases if needed
      if (errorCode === 'auth/email-already-in-use') {
        console.log('Email is already in use. Please choose another email.')
      } else if (errorCode === 'auth/invalid-email') {
        console.log('Invalid email address. Please enter a valid email.')
      } else {
        // Handle other error cases
        console.log('An unexpected error occurred. Please try again later.')
      }
    })
}

export const logUserOut = () => {
  signOut(auth)
}
