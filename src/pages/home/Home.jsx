import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';
import moment from 'moment';

let mood, ill;
class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            timeCurrent: moment().format("HH:MM"),
            dateCurrent: moment().format("Do MMM, YYYY"),
            showMoodSelection: 'hidden',
            moodIdentifier: '',
            showShortTermPopUp: 'hidden',
            illIdentifier: '',
        };
    }
    
    componentDidMount(){
        setTimeout(function(){ 
            this.shortTermHealth();
         }.bind(this), 1200);
    }   
    shortTermHealth(){
        this.setState({showMoodSelection:'visible'});
    } 
    moodSelection(moodState){
        this.setState({moodIdentifier:moodState});
    }
    moodType(moodVal) {
        if (moodVal === this.state.moodIdentifier) {
            mood = moodVal;
            return 'activeMood';          
        }
        else return '';
    }
    closePopUp(){
        this.setState({showMoodSelection:'hidden'});
        setTimeout(function(){ 
            this.setState({showShortTermPopUp:'visbile'});
        }.bind(this), 1000);        
    }
    getUserMood(){
        //alert(mood);
    }
    illnessSelect(illState){
        this.setState({illIdentifier:illState});
    }
    illnessType(illVal) {
        if (illVal === this.state.illIdentifier) {
            ill = illVal;
            return 'activeMood';          
        }
        else return '';
    }
    closePopUpFull(){
        this.setState({showMoodSelection:'hidden'});
        this.setState({showShortTermPopUp:'hidden'});
        setTimeout(function(){ 
            this.context.router.history.push('/loading');
        }.bind(this), 1000);  
    }
    getUserIllness(){
        //alert(ill);
    }
    render(){
        return(
            <div className="wrapper">
                <AppHeader />
                <div className="row m-0 guide mt-3">
                    <div className="" onClick={() => this.shortTermHealth()}>
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
                <div className={"popUpUnderlay " + this.state.showMoodSelection}>
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
                            <form action="javascript:void(0)" onSubmit={this.getUserMood} autocomplete="off">
                                <div className="row m-0 pt-2">
                                    <div className="col-6 pr-1">
                                        <div className={"popUpTile " + this.moodType('Happy')} onClick={() => this.moodSelection("Happy")}>
                                            {/* <label htmlFor="">Sad</label> */}
                                            <i class="fas fa-smile moodEmoticon"></i>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <div className={"popUpTile " + this.moodType('Sad')} onClick={() => this.moodSelection("Sad")}>
                                            <i class="fas fa-frown moodEmoticon"></i>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <div className={"popUpTile " + this.moodType('Angry')} onClick={() => this.moodSelection("Angry")}>
                                            <i class="fas fa-angry moodEmoticon"></i>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <div className={"popUpTile " + this.moodType('Tired')} onClick={() => this.moodSelection("Tired")}>
                                            <i class="fas fa-tired moodEmoticon"></i>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <div className={"popUpTile " + this.moodType('InLove')} onClick={() => this.moodSelection("InLove")}>
                                            <i class="fas fa-grin-hearts moodEmoticon"></i>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <div className={"popUpTile " + this.moodType('Joy')} onClick={() => this.moodSelection("Joy")}>
                                            <i class="fas fa-grin-beam moodEmoticon"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0 mt-3">
                                    <div className="col-6 pr-1">
                                        <button className="popUpNavigation btn-danger" onClick={() => this.closePopUp()}>Cancel</button>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <button className="popUpNavigation btn-success" type="submit" onClick={() => this.closePopUp()}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={"popUpUnderlay " + this.state.showShortTermPopUp}>
                    <div className="homePopUpOrange pt-3">
                        <div className="popUpTitle">
                            <div className="popupAvatar">
                                <img src={require('../../images/guide.png')} alt="" className="guideAvatar" />
                                <div className="popUpTitleText">
                                    <label>How are you today?</label>
                                </div>
                            </div>
                        </div>
                        <div className="popUpTileContainer">
                            <form action="javascript:void(0)" onSubmit={this.getUserIllness} autocomplete="off">
                                <div className="row m-0 pt-2">
                                    <div className="col-6 pr-1">
                                        <div className={"popUpTile " + this.illnessType('Headache')} onClick={() => this.illnessSelect("Headache")}>
                                            <label htmlFor="">Headache</label>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <div className={"popUpTile " + this.illnessType('StomachUpset')} onClick={() => this.illnessSelect("StomachUpset")}>
                                            <label htmlFor="">Stomach Upset</label>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <div className={"popUpTile " + this.illnessType('Fever')} onClick={() => this.illnessSelect("Fever")}>
                                            <label htmlFor="">Fever</label>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <div className={"popUpTile " + this.illnessType('ColdCough')} onClick={() => this.illnessSelect("ColdCough")}>
                                            <label htmlFor="">Cold &amp; Cough</label>
                                        </div>
                                    </div>
                                    <div className="col-6 pr-1">
                                        <div className={"popUpTile " + this.illnessType('Fatigue')} onClick={() => this.illnessSelect("Fatigue")}>
                                            <label htmlFor="">Fatigue</label>
                                        </div>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <div className={"popUpTile " + this.illnessType('Fine')} onClick={() => this.illnessSelect("Fine")}>
                                            <label htmlFor="">Perfectly Fine!!</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row m-0 mt-3">
                                    <div className="col-6 pr-1">
                                        <button className="popUpNavigation btn-danger" onClick={() => this.closePopUpFull()}>Cancel</button>
                                    </div>
                                    <div className="col-6 pl-1">
                                        <button className="popUpNavigation btn-success" type="submit" onClick={() => this.closePopUpFull()}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Home;