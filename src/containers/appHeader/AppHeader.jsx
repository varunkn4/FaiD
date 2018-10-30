import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return (
      <div className="wrapper appHead">
        <div className="row m-0 h-100">
            <div className="col-6 h-100 p-0">
                <div className="logoHead">
                    <img src={require('../../images/faid-logo-trans.png')} alt="Home" className="homeLogo mt-1" />
                </div>
            </div>
            <div className="col-6 h-100">
                <div className="mainMenu right">
                    <img src={require('../../images/faid.png')} alt="Menu" className="menuIcon mt-1" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;
