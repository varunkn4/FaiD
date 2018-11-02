import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HealthDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            healthActive : ""
        }
    }
    healthSelection(healthState){
        this.setState({healthActive:healthState});
    }
    healthType(health) {
        if (health === this.state.healthActive) {
          return 'activeIdentifier';
        }
        else return '';
    }
    goToPrevPage() {
        this.context.router.history.push('/register/dietDetails');
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
                <div className="row m-0 mt-4">
                    <div className="healthSpecifier entryContainer extendedContainer">
                        <div className="row m-0">
                            <div className="col-4 pr-1 pl-0">
                                <div className={"healthContainer " + this.healthType('Diabetes')} onClick={() => this.healthSelection("Diabetes")}>
                                    <img src={require('../../images/icons/diabetes.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Diabetes</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className={"healthContainer " + this.healthType('Cholesterol')} onClick={() => this.healthSelection("Cholesterol")}>
                                    <img src={require('../../images/icons/cholesterol.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Cholesterol</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className={"healthContainer " + this.healthType('Blood Pressure')} onClick={() => this.healthSelection("Blood Pressure")}>
                                    <img src={require('../../images/icons/blood_pressure.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Blood Pressure</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-0">
                                <div className={"healthContainer " + this.healthType('Hypertension')} onClick={() => this.healthSelection("Hypertension")}>
                                    <img src={require('../../images/icons/hypertension.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Hypertension</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className={"healthContainer " + this.healthType('Headaches')} onClick={() => this.healthSelection("Headaches")}>
                                    <img src={require('../../images/icons/headaches.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Headaches</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className={"healthContainer " + this.healthType('Obesity')} onClick={() => this.healthSelection("Obiesity")}>
                                    <img src={require('../../images/icons/obiesity.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Obesity</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-0">
                                <div className={"healthContainer " + this.healthType('Acidity')} onClick={() => this.healthSelection("Acidity")}>
                                    <img src={require('../../images/icons/acidity.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Acidity</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className={"healthContainer " + this.healthType('Osteoporosis')} onClick={() => this.healthSelection("Osteoporosis")}>
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