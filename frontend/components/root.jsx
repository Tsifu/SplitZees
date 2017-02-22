import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionContainer from './session/session_form_container';
import SignUpContainer from './signup/signup_form_container';
import HomeContainer from './home/home_container';
import TransactionsContainer from './transactionsbyfriend/transaction_container';
import DashboardContainer from './home/dashboard/dashboard_container';
import CurrentBalanceContainer from './home/currentbalance/currentbalance_container';

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
        <Route path='/' component={App}/>
        <Route path='/signup' component={SignUpContainer} onEnter={ redirectIfLoggedIn } />
        <Route path='/home' component={HomeContainer} onEnter={ redirectUnlessLoggedIn }>
          <IndexRoute component={DashboardContainer}/>
          <Route path='/friends/:friendId' component={TransactionsContainer} onEnter={ redirectUnlessLoggedIn }/>
        </Route>
      </Router>
    </Provider>
  )
};

export default Root;
