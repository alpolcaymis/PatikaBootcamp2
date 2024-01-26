import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAaERtNKY-2Wx6Je_dLVlMug8bET420uZ0',
  authDomain: 'fimple-ticket-system.firebaseapp.com',
  projectId: 'fimple-ticket-system',
  storageBucket: 'fimple-ticket-system.appspot.com',
  messagingSenderId: '190758421917',
  appId: '1:190758421917:web:d940e6c348ddb2de98db74',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
