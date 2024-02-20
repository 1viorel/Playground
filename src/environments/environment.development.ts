import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCH4SQrcOdupi1BDTFRLtrNSpOtFpB-QCg',
    authDomain: 'messing-around-47a57.firebaseapp.com',
    projectId: 'messing-around-47a57',
    storageBucket: 'messing-around-47a57.appspot.com',
    messagingSenderId: '282570296143',
    appId: '1:282570296143:web:7d1fee66e17163adf6933a',
    measurementId: 'G-Z7LMZF6E9V',
  },
};
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
