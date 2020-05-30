import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase/app";
import "firebase/firestore";
import CssBaseline from '@material-ui/core/CssBaseline';

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

// https://github.com/stereobooster/react-snap
const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(<React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>, rootElement);
} else {
  ReactDOM.render(<React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
