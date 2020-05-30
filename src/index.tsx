import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import "firebase/firestore";

// init firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4ssTvUf3nZOZEIBkOuKIoqfVCNkizK-I",
  authDomain: "brandstetter-io.firebaseapp.com",
  databaseURL: "https://brandstetter-io.firebaseio.com",
  projectId: "brandstetter-io",
  storageBucket: "brandstetter-io.appspot.com",
  messagingSenderId: "649829676737",
  measurementId: "G-XNZZ6YQDR4",
};

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
