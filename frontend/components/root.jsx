import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionContainer from './session/session_form_container';
import SignUpContainer from './signup/signup_form_container';
import HomeContainer from './home/home_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={App}>
        <Route path='/signin' component={SessionContainer}/>
      </Route>
      <Route path='/signup' component={SignUpContainer}/>
      <Route path='/home' component={HomeContainer}/>
    </Router>
  </Provider>
);

export default Root;
