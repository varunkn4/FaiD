import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import BasicDetails from '../../containers/registration/BasicDetails';
import SecondaryDetails from '../../containers/registration/SecondaryDetails';
import DietDetails from '../../containers/registration/DietDetails';

class Register extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        {/* <BasicDetails /> */}
        {/* <SecondaryDetails /> */}
        <DietDetails />
      </div>
    );
  }
}

export default Register;
