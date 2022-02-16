import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getMessaging, getToken } from "firebase/messaging";

// INFO DONNER LORS DE LA CREATION DU PROJET SUR FIREBASE
const config = {
  apiKey: "API_ICI",
  authDomain: "METTRE_DOMAINE_ICI.firebaseapp.com",
//   databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "NOM_PROJET_ICI",
  storageBucket: "NOM_PROJET.appspot.com",
  messagingSenderId: "SENDER_ID_ICI",
  appId: "APP_ID_ICI",
  measurementId: "measurementId_ICI"
}
firebase.initializeApp(config);



if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('firebase-messaging-sw.js')
      .then(function(registration) {
          console.log('[SW]: SCOPE: ', registration.scope);
          return registration.scope;
      })
      .catch(function(err) {
          return err;
      });
}


function App() {

useEffect(() => {
  const messaging = getMessaging();
     
  getToken(messaging, { vapidKey: 'METTRE PUBLIC VAPID ICI https://stackoverflow.com/questions/54996206/firebase-cloud-messaging-where-to-find-public-vapid-key' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  })

},[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
