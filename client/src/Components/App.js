import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Login from './auth/Login';
import Signup from './auth/Signup';

const Landing = () => {
  return (
    <div><h3>Landing</h3></div>
  );
}

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route path="/" exact component={Landing} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);