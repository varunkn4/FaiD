import React, { Component } from 'react';
import Login from './pages/login/Login'
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
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
