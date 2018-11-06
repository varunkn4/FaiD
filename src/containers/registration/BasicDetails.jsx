import React, { Component } from 'react';
import Calender from '../../components/calender/Calender';
import PropTypes from 'prop-types';

class BasicDetails extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      genderIdentifier : "",
      calendarDate: ''
    }
  }
  genderSelection(genderState){
    this.setState({genderIdentifier:genderState});
  }
  selectionStatus(gender) {
    if (gender === this.state.genderIdentifier) {
      return 'genderSelected';
    }
    else return '';
  }
  getBasicDetails = (event) => {
    event.stopPropagation();
    const { nameEntry } = event.target;
    const userNameInput = nameEntry.value;
    alert([this.state.genderIdentifier,userNameInput,this.state.calendarDate]);
    this.context.router.history.push('/register/secondaryDetails');
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
              Hi there! I'm Jen. <br />
              And you are?
            </span>
          </div>
        </div>
        <form action="javascript:void(0)" onSubmit={this.getBasicDetails} autocomplete="off">
          <div className="row m-0 mt-4">
            <div className="genderSpecifier entryContainer">
              <div className="row m-0">
                <div className="col-6 pr-2 pl-0">
                  <div className={"genderContainer " + this.selectionStatus('Woman')} onClick={() => this.genderSelection("Woman")}>
                    <img src={require('../../images/woman.png')} alt="Woman" className="genderAvatar" />
                  </div>
                </div>
                <div className="col-6 pl-2 pr-0">
                    <div className={"genderContainer " + this.selectionStatus('Man')} onClick={() => this.genderSelection("Man")}>
                      <img src={require('../../images/man.png')} alt="Man" className="genderAvatar" />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="nameSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="fullName">What do I call you?</label>
              <input type="text" name="" id="nameEntry" className="fieldEntryText" />
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="ageSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="dateOfBirth">When were you born?</label>
              <Calender calenderClass="fieldEntryButton defaultButton" calenderInput={calendarDate => {this.setState({calendarDate})}} />
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="registrationNavButtons entryContainer">
              <div className="row m-0">
                <div className="col-12 p-0">
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

BasicDetails.contextTypes = {
  router: PropTypes.object.isRequired
}

export default BasicDetails;
