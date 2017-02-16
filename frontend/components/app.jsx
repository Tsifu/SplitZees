import React from 'react';
import { hashHistory } from 'react-router';
import HeaderContainer from './header/header_container';

const App = ({children}) => {

  return (
    <div>
      <HeaderContainer />


      <div className="main">
        <div className="logo">
          <img src={window.images.smallLogo}/>
          <h1>Split expenses with friends.</h1>
        </div>

        <div className="slogan">
          <strong>Share bills</strong> and IOUs. Its alright to leave your wallet at home!
        </div>
      </div>
    </div>
  );
};

export default App;
