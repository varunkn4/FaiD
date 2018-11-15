import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppHeader from '../../containers/appHeader/AppHeader';
import Routes from './routes';


class Register extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        <Router>
            {Routes}
        </Router>
      </div>
    );
  }
}

export default Register;
