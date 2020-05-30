import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase/app";
import "firebase/firestore";
import { useDocumentData } from 'react-firebase-hooks/firestore';

// init firebase
const firebaseConfig = {
  apiKey: "AIzaSyB4ssTvUf3nZOZEIBkOuKIoqfVCNkizK-I",
  authDomain: "brandstetter-io.firebaseapp.com",
  databaseURL: "https://brandstetter-io.firebaseio.com",
  projectId: "brandstetter-io",
  storageBucket: "brandstetter-io.appspot.com",
  messagingSenderId: "649829676737",
  measurementId: "G-XNZZ6YQDR4"
};

firebase.initializeApp(firebaseConfig)

function App() {

  const [value, loading, error] = useDocumentData<any>(firebase.firestore().doc('blog/page1'));


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> {!loading && value.content}  and save to reload.
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
