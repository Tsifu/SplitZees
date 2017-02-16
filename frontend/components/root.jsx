import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import HeaderContainer from './header/header_container';
import SessionContainer from './session/session_form_container';
import SignUpContainer from './signup/signup_form_container';
import HomeContainer from './home/home_container';

const Root = ({ store }) => {

  function redirectIfLoggedIn(nextState, replace) {
      if (store.getState().session.currentUser)
        replace('/home');
  }

  function redirectUnlessLoggedIn(nextState, replace) {
      if (!store.getState().session.currentUser)
        replace('/signup');
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={HeaderContainer}/>
        <Route path='/signup' component={SignUpContainer} onEnter={ redirectIfLoggedIn } />
        <Route path='/home' component={HomeContainer} onEnter={ redirectUnlessLoggedIn }/>
      </Router>
    </Provider>
  )
};

export default Root;
