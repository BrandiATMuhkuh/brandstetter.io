import React from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";
import "typeface-roboto";



function App() {
  const [value, loading] = useDocumentData<{ content: string; title: string }>(
    firebase.firestore().doc("blog/page1")
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> {!loading && value?.content} and save to
          reload.
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
