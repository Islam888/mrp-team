import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtJvH82FknBV9xMoD4Nb9dS17aoIngKEs",
    authDomain: "mrp-team.firebaseapp.com",
    databaseURL: "https://mrp-team.firebaseio.com",
    projectId: "mrp-team",
    storageBucket: "mrp-team.appspot.com",
    messagingSenderId: "998679678604"
  };
  var fire = firebase.initializeApp(config);

  export default fire