import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';
import moment from 'moment';

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
          timeCurrent: moment().format("HH:MM"),
          dateCurrent: moment().format("Do MMM, YYYY"),
          showShortTermPopUp: 'hidden'
        };
    }
    
    componentDidMount(){
        setTimeout(function(){ 
            this.shortTermHealth();
         }.bind(this), 1200);
    }   
    shortTermHealth(){
        this.setState({showShortTermPopUp:'visible'});
    } 
    render(){
        return(
            <div className="wrapper">
                <AppHeader />
                <div className="row m-0 guide mt-3">
                    <div className="">
                        <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
                    </div>
                    <div className="guideDialog pt-4">
                        <span>
                            Welcome Back, <br />
                            Sam Smith
                        </span>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    {/* {this.state.timeCurrent} */}
                    <div className="dateTimeWeatherContainer">
                        <div className="row m-0">
                            <div className="col-8 locationDate">
                                <div>
                                    <label className="locationCity">Kerala</label>
                                </div>
                                <div>
                                    <label className="locationCountry">India</label>
                                </div>
                                <div>
                                    <label className="locationDate">{this.state.dateCurrent}</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="timeCapsule">
                                    <div className="timeContainer">
                                        <label className="timeLabel">{this.state.timeCurrent}</label>
                                    </div>
                                    <div className="weatherContainer">
                                        <label className="weatherContainer">31<span>o</span> C</label>
                                    </div>
                                </div>                                
                            </div>                            
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="homeReccomendations">
                        <div>
                            <label className="homeHeader">Reccomendations</label>
                        </div>
                        <div>
                            <label className="nilMessage">No Recommendations yet!</label>
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="homePopularFood">
                        <div>
                            <label className="homeHeader">Popular this week</label>
                        </div>
                        <div>
                            <label className="nilMessage">Nothing popular yet!</label>
                        </div>
                    </div>
                </div>
                <div className={"popUpUnderlay " + this.state.showShortTermPopUp}>
                    <div className="homePopUpOrange pt-3">
                        <div className="popUpTitle">
                            <div className="popupAvatar">
                                <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
                                <div className="popUpTitleText">
                                    <label>How's your mood now?</label>
                                </div>
                            </div>
                        </div>
                        <div className="popUpTileContainer">
                            <div className="row m-0 pt-2">
                                <div className="col-6">
                                    <div className="popUpTile">
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="popUpTile">
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="popUpTile">
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="popUpTile">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;