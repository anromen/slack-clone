import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOa0Jk0miCGR_SCmoEcdJT9l9_8BWLHY0",
  authDomain: "slack-clone-aa1ff.firebaseapp.com",
  databaseURL: "https://slack-clone-aa1ff.firebaseio.com",
  projectId: "slack-clone-aa1ff",
  storageBucket: "slack-clone-aa1ff.appspot.com",
  messagingSenderId: "868524952221",
  appId: "1:868524952221:web:b369f1874a297bd641e274",
  measurementId: "G-2JQ74EGWHE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
