import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../components/dropdown/Dropdown';

class DietDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
          dietidentifier : ""
        }
    }
    dietSelection(dietState){
        this.setState({dietidentifier:dietState});
    }
    dietType(diet) {
        if (diet === this.state.dietidentifier) {
          return 'dietSelected';
        }
        else return '';
    }
    getDietDetails = (event) => {
        event.stopPropagation();
        alert(this.state.dietidentifier);
        this.context.router.history.push('/register/healthDetails');
      }
    goToPrevPage() {
        this.context.router.history.push('/register/secondaryDetails');
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
                        That's that, Sam! <br />
                        But what do you eat?
                        </span>
                    </div>
                </div>
                <form action="javascript:void(0)" onSubmit={this.getDietDetails} autocomplete="off">
                    <div className="row m-0 mt-4">
                        <div className="primaryDietSpecifier entryContainer extendedContainer">
                            <div className="row m-0">
                                <div className="col-4 pr-1 pl-0">
                                    <div className={"dietContainer greenContainer " + this.dietType('Vegan')} onClick={() => this.dietSelection("Vegan")}>
                                        <img src={require('../../images/icons/veg.png')} alt="" className="dietAvatar" />
                                        <p className="dietLabel">Vegan</p>
                                    </div>
                                </div>
                                <div className="col-4 pl-1 pr-1">
                                    <div className={"dietContainer yellowContainer " + this.dietType('Vegetarian')} onClick={() => this.dietSelection("Vegetarian")}>
                                        <img src={require('../../images/icons/egg.png')} alt="" className="dietAvatar" />
                                        <p className="dietLabel">Vegetarian</p>
                                    </div>
                                </div>
                                <div className="col-4 pl-1 pr-0">
                                    <div className={"dietContainer redContainer " + this.dietType('NonVegan')} onClick={() => this.dietSelection("NonVegan")}>
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
                            <label htmlFor="" className="fieldEntryLabel" id="fullName">Do you avoid certain food?</label>
                            {/* <input type="text" name="" id="nameEntry" className="fieldEntryText"/> */}
                            <Dropdown />
                        </div>          
                    </div>
                    <div className="row m-0 pr-3 pl-3 mt-4">
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

DietDetails.contextTypes = {
    router: PropTypes.object.isRequired
}

export default DietDetails;