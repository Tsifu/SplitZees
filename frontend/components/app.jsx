import React from 'react';
import { hashHistory } from 'react-router';

const editLink = (path) => (e) => {
  e.preventDefault();
  hashHistory.push(path)
}

const App = ({ children }) => (
  <div>
    <h1>SplitZees</h1>
    <button onClick={editLink("/signin")}>Log in</button>
    <button onClick={editLink("/signup")}>Sign Up</button>
    {children}
  </div>
);

export default App;
