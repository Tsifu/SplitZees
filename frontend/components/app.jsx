import React from 'react';
import { hashHistory } from 'react-router';
import HeaderContainer from './header/header_container';

const App = ({children}) => {

  return (
    <div>
      <HeaderContainer />


      <div className="main">
        <div className="splash-logo">
          <div className="wallet-logo">
            <img src={window.images.wallet}/>
          </div>
          <h1>Split expenses with friends.</h1>
        </div>

        <div className="slogan">
          <strong>Share bills</strong> and IOUs. It's alright to leave your wallet at home!
        </div>
      </div>

      <div className="landing-images">
        <div className="landing-img-1">
          <img className="wallet-img123" src={window.images.broke}/>

        </div>

        <div className="landing-img-2">
          <img className="wallet-img123" src={window.images.splitBill}/>
        </div>
      </div>
    </div>
  );
};

export default App;
