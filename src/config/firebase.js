import * as firebase from "firebase";
var config = {
  apiKey: "apk-key",
  authDomain: "react-crud-pk.firebaseapp.com",
  databaseURL: "https://react-crud-pk.firebaseio.com",
  projectId: "react-crud-pk",
  storageBucket: "react-crud-pk.appspot.com",
  messagingSenderId: "your-id"
};
firebase.initializeApp(config);

export default firebase;
