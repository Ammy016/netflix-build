import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDxM3qvdMpcfl9SfdPz0rag-CJaSAsfqE8",
    authDomain: "netflix-build-b7fa5.firebaseapp.com",
    projectId: "netflix-build-b7fa5",
    storageBucket: "netflix-build-b7fa5.appspot.com",
    messagingSenderId: "711626049770",
    appId: "1:711626049770:web:ae2053980c31632aae2f93"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();

   export { auth };
   export default db;