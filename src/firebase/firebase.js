import * as firebase from 'firebase';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // CHILD_REMOVED
// database.ref('notes').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // CHILD_CHANGED
// database.ref('notes').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // CHILD_ADDED
// database.ref('notes').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// CONVERT TO ARRAY ONCE
// database.ref('notes')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
//   });

// // CONVERT TO ARRAY SUBSCRIBED
// const valueChange = database.ref('notes').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// // create new array
// database.ref('notes').push({
//     title: 'to shit',
//     body: 'my code'
// });

// const firebaseNotes = {
//     notes: {
//         test: {
//             title: 'First note!',
//             body: 'this is my note'
//         },
//         test2: {
//             title: 'second note!',
//             body: 'this is my note'
//         }
//     }
// }

// // DATA SUBSCRIPTION
// const onValueChange = database.ref().on('value',  (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(10);
// }, 3500);

// // unsub from fetching data
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(14);
// }, 10500);

// FETCH DATA ONCE
// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('error fetching data', e);
// });

//   database.ref().set({
//       name: 'Junwei'
//   }).then(() => {
//       console.log('data is saved');
//   }).catch((error) => {
//       console.log('this failed', error);
//   });

//   database.ref('attributes').set({
//       height: '171 cm',
//       weight: '68 kg'
//   }).then(() => {
//       console.log('second set call worked!');
//   }).catch((error) => {
//       console.log('2nd call failed', error);
//   });

// database.ref().update({
//     name: 'Mike',
//     age: 31,
//     'attributes/weight': '50 kg'
// });

//   console.log("made a request to change data");

// database.ref('attributes/height').remove().then(() => {
//     console.log("deleted");
// }).catch((error) => {
//     console.log("error", error);
// });