import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import './App.css';
import './styles.css'


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="switchDevicePrompt">
          Please switch to a smaller device
        </div> 
        <div className="contentView">
          {/* <Login /> */}
          {/* <Register /> */}
          <Router>
            {Routes}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
