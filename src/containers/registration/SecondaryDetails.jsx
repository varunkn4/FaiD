import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from '../../components/location/Location'

class SecondaryDetails extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      heightMetric: "cm",
      weightMetric: "kg",
      country: '',
      region: '',
      invokeLocator: 'hidden',
      locationVisibility: '',
      countrySelection: '',
      regionSelection: '',
    }
  }
  heightMetricSwap(currentHeightMetric){
    if(currentHeightMetric === "cm"){
      this.setState({heightMetric: "in"});
    }
    else if(currentHeightMetric === "in"){
      this.setState({heightMetric: "m"});
    }
    else if(currentHeightMetric === "m"){
      this.setState({heightMetric: "cm"});
    }
  }
  weightMetricSwap(currentWeightMetric){
    if(currentWeightMetric === "kg"){
      this.setState({weightMetric: "lb"});
    }
    else if(currentWeightMetric === "lb"){
      this.setState({weightMetric: "st"});
    }
    else if(currentWeightMetric === "st"){
      this.setState({weightMetric: "kg"});
    }
  }
  getSecondaryDetails = (event) => {
    event.stopPropagation();
    const { heightEntry, weightEntry } = event.target;
    const userHeightInput = heightEntry.value + this.state.heightMetric;
    const userWeightInput = weightEntry.value + this.state.weightMetric;
    alert([userHeightInput, userWeightInput, this.state.countrySelection, this.state.regionSelection]);
    this.context.router.history.push('/register/dietDetails');
  }
  goToPrevPage() {
    this.context.router.history.push('/register/basicDetails');
  }
  showLocationPicker() {
    this.setState({invokeLocator:'visible'});
    this.setState({locationVisibility:'visible'});
  }
  closeLocationSelect() {
    this.setState({locationVisibility:'hidden'});
    //alert([this.state.countrySelection, this.state.regionSelection]);
  }
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
        <form action="javascript:void(0)" onSubmit={this.getSecondaryDetails} autocomplete="off">
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="locationSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="dateOfBirth">Where are you from?</label>
              <button className="fieldEntryButton defaultButton" type="button" onClick={()=> this.showLocationPicker()}>
                  { this.state.regionSelection === ''
                    ? <i class="fas fa-map-marker-alt"></i>
                    : <i>{this.state.regionSelection}</i>
                  }
                  {/* <i class="fas fa-map-marker-alt"></i> */}
              </button>
              <div className={this.state.invokeLocator}>
                {/* {this.state.invokeLocationSelector === 'visible'
                    ? <Location invokeState={this.state.invokeLocationSelector}/>  
                    : null
                }                 */}
                  <div className={"locationUnderlay " + this.state.locationVisibility}>
                    <Location 
                      countryValue={countrySelection => {this.setState({countrySelection})}} 
                      regionValue={regionSelection => {this.setState({regionSelection})}}
                    /> 
                    <div className="closeLocation">
                      <button type="button" className="btn btn-danger" onClick={() => this.closeLocationSelect()}>Close</button>
                    </div>                    
                  </div>
              </div>
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="heightSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="fullName">How tall are you?</label>
              <input type="number" name="" id="heightEntry" step="0.01" className="fieldEntryText withUnit"/>
              <button className="metricsUnit" type="button" onClick={() => this.heightMetricSwap(this.state.heightMetric)}>{this.state.heightMetric}</button>            
            </div>          
          </div>
          <div className="row m-0 pr-3 pl-3 mt-4">
            <div className="weightSpecifier entryContainer">
              <label htmlFor="" className="fieldEntryLabel" id="fullName">How heavy are you?</label>
              <input type="number" name="" id="weightEntry" step="0.01" className="fieldEntryText withUnit"/>
              <button className="metricsUnit" type="button" onClick={() => this.weightMetricSwap(this.state.weightMetric)}>{this.state.weightMetric}</button>
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

SecondaryDetails.contextTypes = {
  router: PropTypes.object.isRequired
}

export default SecondaryDetails;
