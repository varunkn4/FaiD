import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HealthDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //healthActive : "",
            diabetes : '',
            cholesterol : '',
            bloodPressure :'',
            hypertension :'',
            headaches :'',
            obesity :'',
            acidity :'',
            osteoporosis :'',
            enableSelectionClear : 'hidden'
        }
    }
    healthSelection(healthState){
        //this.setState({healthActive:healthState});
        this.setState({enableSelectionClear:'visible'});
        if(healthState === "Diabetes"){this.setState({diabetes:'activeIdentifier'})}
        if(healthState === "Cholesterol"){this.setState({cholesterol:'activeIdentifier'})}
        if(healthState === "Blood Pressure"){this.setState({bloodPressure:'activeIdentifier'})}
        if(healthState === "Hypertension"){this.setState({hypertension:'activeIdentifier'})}
        if(healthState === "Headaches"){this.setState({headaches:'activeIdentifier'})}
        if(healthState === "Obesity"){this.setState({obesity:'activeIdentifier'})}
        if(healthState === "Acidity"){this.setState({acidity:'activeIdentifier'})}
        if(healthState === "Osteoporosis"){this.setState({osteoporosis:'activeIdentifier'})}
    }
    // healthType(health) {
    //     if (health === this.state.healthActive) {
    //       return 'activeIdentifier';
    //     }
    // }
    goToPrevPage() {
        this.context.router.history.push('/register/dietDetails');
    }
    clearSelction() {
        this.setState({enableSelectionClear:'hidden'});
        this.setState({
            diabetes:'',
            cholesterol:'',
            bloodPressure:'',
            hypertension:'',
            headaches:'',
            obesity:'',
            acidity:'',
            osteoporosis:''
        })
    }
    render() {
        return(
            <div>
                <div className="row m-0 guide mt-3">
                    <div className="">
                        <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
                    </div>
                    <div className="guideDialog pt-4 smallDialog">
                        <span>
                        Ahhaa, Gotchaa! <br />
                        Any health issues?
                        </span>
                    </div>
                </div>
                <div className="row m-0 mt-1">
                    <div className="healthSpecifier entryContainer extendedContainer">
                        <div className="row m-0">
                            <div className="col-4 pr-1 pl-0">
                                {/* <div className={"healthContainer " + this.healthType('Diabetes')} onClick={() => this.healthSelection("Diabetes")}> */}
                                <div className={"healthContainer " + this.state.diabetes} onClick={() => this.healthSelection("Diabetes")}>
                                    <img src={require('../../images/icons/diabetes.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Diabetes</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className={"healthContainer " + this.state.cholesterol} onClick={() => this.healthSelection("Cholesterol")}>
                                    <img src={require('../../images/icons/cholesterol.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Cholesterol</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className={"healthContainer " + this.state.bloodPressure} onClick={() => this.healthSelection("Blood Pressure")}>
                                    <img src={require('../../images/icons/blood_pressure.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Blood Pressure</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-0">
                                <div className={"healthContainer " + this.state.hypertension} onClick={() => this.healthSelection("Hypertension")}>
                                    <img src={require('../../images/icons/hypertension.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Hypertension</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className={"healthContainer " + this.state.headaches} onClick={() => this.healthSelection("Headaches")}>
                                    <img src={require('../../images/icons/headaches.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Headaches</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className={"healthContainer " + this.state.obesity} onClick={() => this.healthSelection("Obesity")}>
                                    <img src={require('../../images/icons/obiesity.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Obesity</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-0">
                                <div className={"healthContainer " + this.state.acidity} onClick={() => this.healthSelection("Acidity")}>
                                    <img src={require('../../images/icons/acidity.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Acidity</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className={"healthContainer " + this.state.osteoporosis} onClick={() => this.healthSelection("Osteoporosis")}>
                                    <img src={require('../../images/icons/osteoporosis.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Osteoporosis</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className="healthContainer otherConditionsContainer">
                                    <img src={require('../../images/icons/plus.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Others</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className={"healthClear " + this.state.enableSelectionClear}>
                                <button type="button" className="btn btn-danger" onClick={() => this.clearSelction()}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 pr-3 pl-3 mt-4">
                    <div className="registrationNavButtons entryContainer">
                        <div className="row m-0">
                            <div className="col-6 p-0 pr-1">
                                <button className="navButton" onClick={() => this.goToPrevPage()}>Previous</button>
                            </div>
                            <div className="col-6 p-0 pl-1">
                                <button className="navButton finish" type="submit">Finish</button>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        );
    }
}

HealthDetails.contextTypes = {
    router: PropTypes.object.isRequired
  }

export default HealthDetails;