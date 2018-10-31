import React, { Component } from 'react';
import Calender from '../../components/calender/Calender';

class BasicDetails extends Component { 
  render() {
    return (
      <div className="">
        <div className="row m-0 guide mt-3">
          <div className="">
            <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
          </div>
          <div className="guideDialog pt-4">
            <span>
              Hi there! I'm Jen. <br />
              And you are?
            </span>
          </div>
        </div>
        <div className="row m-0 mt-4">
          <div className="genderSpecifier entryContainer">
            <div className="row m-0">
              <div className="col-6 pr-2 pl-0">
                <div className="genderContainer">
                  <img src={require('../../images/woman.png')} alt="" className="genderAvatar" />
                </div>
              </div>
              <div className="col-6 pl-2 pr-0">
                  <div className="genderContainer">
                    <img src={require('../../images/man.png')} alt="" className="genderAvatar" />
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
          <div className="nameSpecifier entryContainer">
            <label htmlFor="" className="fieldEntryLabel" id="fullName">What do I call you?</label>
            <input type="text" name="" id="nameEntry" className="fieldEntryText"/>
          </div>          
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
          <div className="ageSpecifier entryContainer">
            <label htmlFor="" className="fieldEntryLabel" id="dateOfBirth">When were you born?</label>
            {/* <input type="text" name="" id="ageEntry" className="fieldEntryText"/> */}
            <Calender calenderClass="fieldEntryButton defaultButton" />
          </div>          
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
          <div className="registrationNavButtons entryContainer">
            <div className="row m-0">
              <div className="col-12 p-0">
                <button className="navButton">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicDetails;
