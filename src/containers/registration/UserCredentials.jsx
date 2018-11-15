import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserCredentials extends Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  goToPrevPage() {
    this.context.router.history.push('/register/basicDetails');
  }
  getCredentials = (event) => {
    event.stopPropagation();
    const { usernameEntry, passwordEntry, passwordConfirm } = event.target;
    const username = usernameEntry.value;
    const password = passwordEntry.value;
    if(password === passwordConfirm.value){
      //alert([username,password]);
      this.context.router.history.push('/register/secondaryDetails');
    }
    else{
      passwordEntry.value = '';
      passwordConfirm.value = '';
      alert("Password mismatch!")
    }
    
  }
  render() {
    return (
      <div className="">
        <div className="row m-0 guide mt-3">
          <div className="">
            <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
          </div>
          <div className="guideDialog pt-4">
            <span>
              Secure your login<br />
            </span>
          </div>
        </div>
        <form action="javascript:void(0)" onSubmit={this.getCredentials} autocomplete="off">          
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="nameSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="userName">Username</label>
              <input type="email" name="" id="usernameEntry" className="fieldEntryText" />
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="nameSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="password">Password</label>
              <input type="password" name="" id="passwordEntry" className="fieldEntryText" />
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="nameSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="confirmPassword">Confirm Password</label>
              <input type="password" name="" id="passwordConfirm" className="fieldEntryText" />
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="registrationNavButtons entryContainer mt-4">
              <div className="row m-0">
                  <div className="col-6 p-0 pr-1">
                      <button className="navButton" onClick={() => this.goToPrevPage()}>Previous</button>
                  </div>
                  <div className="col-6 p-0 pl-1">
                      <button className="navButton" type="submit">Next</button>
                  </div>
              </div>               
            </div>
          </div>
        </form>
      </div>
    );
  }
}

UserCredentials.contextTypes = {
  router: PropTypes.object.isRequired
}

export default UserCredentials;
