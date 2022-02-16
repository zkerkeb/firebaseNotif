importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js')

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

firebase.initializeApp(config)
const messaging = firebase.messaging()

// IF WE WANT TO HANDLE BACKGROUND NOTIFICATION WE HAVE TO ADD THE FOLLOWING BLOCK OF CODE AS WELL

messaging.setBackgroundMessageHandler(function (payload) {
  
    console.log('[firebase-messaging-sw.js] Received background message ', payload)
  
    const notificationTitle = payload.data.title
    const notificationOptions = {
        body: payload.data.body,
        icon: '/firebase-logo.png'
    }
    
    return self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
    console.log(event)
    return event
})