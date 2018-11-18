import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';

class Crave extends Component{
    goToPrev(){
        this.context.router.history.push('/recommendations');
    }
    render(){
        return(
            <div className="wrapper">
                <AppHeader />
                <div className="row m-0 mt-5">
                    <div className="craveTitle">
                        <h5>Gimme Gimme</h5>
                        <h3>Chicken Clear Soup</h3>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="craveContainer">
                        <div className="craveLogo">
                            <img src={require('../../images/faid-logo-trans.png')} alt="" className="" />
                        </div>
                        <div className="craveAvatar">
                            <img src={require('../../images/guide.png')} alt="" className="" />
                        </div>                        
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="craveMessage">
                        <p>Your craving has been received.</p>
                        <p>Restaurants have been notified.</p>
                        <h4>Stay Tuned for Goodness!!</h4>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="col-6 pr-1">
                        <button className="goBack btn-success" onClick={()=>this.goToPrev()}>Back</button>
                    </div>
                    <div className="col-6 pl-1">
                        <button className="goBack btn-danger disabled" >Similar Food</button>
                    </div>
                </div>
            </div>            
        );
    }
}

Crave.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Crave;