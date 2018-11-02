import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';
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
          <Router>
            {Routes}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
