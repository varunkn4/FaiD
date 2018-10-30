import React, { Component } from 'react';
import Dropdown from '../../components/dropdown/Dropdown';

class DietDetails extends Component{
    render() {
        return(
            <div className="wrapper">
                <div className="row m-0 guide mt-3">
                    <div className="">
                        <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
                    </div>
                    <div className="guideDialog pt-4 smallDialog">
                        <span>
                        That's that, Sam! <br />
                        But what do you eat?
                        </span>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="primaryDietSpecifier entryContainer extendedContainer">
                        <div className="row m-0">
                            <div className="col-4 pr-1 pl-0">
                                <div className="dietContainer greenContainer">
                                    <img src={require('../../images/icons/veg.png')} alt="" className="dietAvatar" />
                                    <p className="dietLabel">Vegan</p>
                                </div>
                            </div>
                            <div className="col-4 pl-1 pr-1">
                                <div className="dietContainer yellowContainer">
                                    <img src={require('../../images/icons/egg.png')} alt="" className="dietAvatar" />
                                    <p className="dietLabel">Vegetarian</p>
                                </div>
                            </div>
                            <div className="col-4 pl-1 pr-0">
                                <div className="dietContainer redContainer">
                                    <img src={require('../../images/icons/non_veg.png')} alt="" className="dietAvatar" />
                                    <p className="dietLabel">Non-Vegetarian</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0 pr-3 pl-3 mt-4">
                    <div className="allergySpecifier entryContainer">
                        <label htmlFor="" className="fieldEntryLabel" id="fullName">Allergic to certain food?</label>
                        {/* <input type="text" name="" id="nameEntry" className="fieldEntryText"/> */}
                        <Dropdown />
                    </div>          
                </div>
                <div className="row m-0 pr-3 pl-3 mt-4">
                    <div className="allergySpecifier entryContainer">
                        <label htmlFor="" className="fieldEntryLabel" id="fullName">Allergic to certain food?</label>
                        {/* <input type="text" name="" id="nameEntry" className="fieldEntryText"/> */}
                        <Dropdown />
                    </div>          
                </div>
            </div>
        );
    }
}

export default DietDetails;