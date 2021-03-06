import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoDV3BHqzo5EfNFfWPrwuuVDEVIKdFDQ4",
    authDomain: "practiceoneklerik.firebaseapp.com",
    projectId: "practiceoneklerik",
    storageBucket: "practiceoneklerik.appspot.com",
    messagingSenderId: "798551946462",
    appId: "1:798551946462:web:0717f30056e78726583e4f",
    measurementId: "G-MBG7C3LD88"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const fireBseTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export const carsCollection = db
    .collection('cars');

export const employeeRef = db
    .collection('site')
    .doc('employees')
    .collection('admins')

export default firebase;

// /// Update object
// carsCollection.doc('customId').update({
//     "dealers.california": false
// })

// /// Add new item in array
// carsCollection.doc('customId').update({
//     "tags": firebase.firestore.FieldValue.arrayUnion('New Value')
// })
//
// /// Delete item from array
// carsCollection.doc('customId').update({
//     "tags": firebase.firestore.FieldValue.arrayRemove('New Value')
// })