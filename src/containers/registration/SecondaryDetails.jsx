import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';

class SecondaryDetails extends Component {
  render() {
    return (
      <div>
        <div className="row m-0 guide mt-3">
            <div className="">
                <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
            </div>
            <div className="guideDialog pt-4 smallDialog">
                <span>
                Hi there, Sam! Tell me <br />
                more about you!
                </span>
            </div>
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
          <div className="locationSpecifier entryContainer">
            <label htmlFor="" className="fieldEntryLabel" id="dateOfBirth">Where are you from?</label>
            <button className="fieldEntryButton defaultButton">
                <i class="fas fa-map-marker-alt"></i>
            </button>
          </div>          
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
          <div className="heightSpecifier entryContainer">
            <label htmlFor="" className="fieldEntryLabel" id="fullName">How tall are you?</label>
            <input type="number" name="" id="nameEntry" className="fieldEntryText withUnit"/>
            <button className="metricsUnit">cm</button>
          </div>          
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
          <div className="weightSpecifier entryContainer">
            <label htmlFor="" className="fieldEntryLabel" id="fullName">How heavy are you?</label>
            <input type="number" name="" id="nameEntry" className="fieldEntryText withUnit"/>
            <button className="metricsUnit">kg</button>
          </div>          
        </div>
        <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="disclaimer">
                <span>Why provide your Height &amp; Weight?</span>
            </div>
        </div>
        <div className="row m-0 pr-3 pl-3 mt-2">
          <div className="registrationNavButtons entryContainer">
            <div className="row m-0">
                <div className="col-6 p-0 pr-1">
                    <button className="navButton">Previous</button>
                </div>
                <div className="col-6 p-0 pl-1">
                    <button className="navButton">Next</button>
                </div>
            </div>               
          </div>
        </div>
      </div>
    );
  }
}

export default SecondaryDetails;
