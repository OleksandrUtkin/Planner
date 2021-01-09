import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

var config = {
    apiKey: 'AIzaSyAXo0dCwkK9zZI7IV06C3-9WL0BtniPvx4',
    authDomain: 'planner-8bd07.firebaseapp.com',
    projectId: 'planner-8bd07',
    storageBucket: 'planner-8bd07.appspot.com',
    messagingSenderId: '585775341452',
    appId: '1:585775341452:web:c67d1dfda33aff10ebc0a9'
};

firebase.initializeApp(config);

firebase.firestore().settings({timestampsInSnapshots: true})

const firebaseReady = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
export default firebaseReady;