import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDrWXPN-E5QypoIscbMBw8dFl7voN6L5L4',
  authDomain: 'tasvr-10464.firebaseapp.com',
  projectId: 'tasvr-10464',
  storageBucket: 'tasvr-10464.appspot.com',
  messagingSenderId: '345148088020',
  appId: '1:345148088020:web:03968c4f925d98eac62541'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
