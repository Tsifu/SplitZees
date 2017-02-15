import React from 'react';
import { hashHistory } from 'react-router';

const editLink = (path) => (e) => {
  e.preventDefault();
  hashHistory.push(path)
}

const App = ({ children }) => (
  <div>
    <div className="header">

      <div className="logo">
        <img src={window.images.splitzeesLogo}/>
      </div>

      <div className="login-button">
        <button className="btn-signin" onClick={editLink("/signin")}>Log in</button>

                  or
                  
        <button className="btn-signup" onClick={editLink("/signup")}>Sign Up</button>
      </div>
    </div>

    {children}
  </div>
);

export default App;
