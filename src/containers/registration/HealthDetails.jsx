import React, { Component } from 'react';

class HealthDetails extends Component {
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
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/diabetes.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Diabetes</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/cholesterol.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Cholesterol</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/blood_pressure.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Blood Pressure</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-0">
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/hypertension.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Hypertension</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/headaches.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Headaches</p>
                                </div>
                            </div>
                            <div className="col-4 pr-0 pl-1">
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/obiesity.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Obesity</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-0">
                                <div className="healthContainer">
                                    <img src={require('../../images/icons/acidity.png')} alt="" className="healthAvatar" />
                                    <p className="healthLabel">Acidity</p>
                                </div>
                            </div>
                            <div className="col-4 pr-1 pl-1">
                                <div className="healthContainer">
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
                                <button className="navButton">Previous</button>
                            </div>
                            <div className="col-6 p-0 pl-1">
                                <button className="navButton finish">Finish</button>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        );
    }
}

export default HealthDetails;