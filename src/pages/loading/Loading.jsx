import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';

class Loading extends Component {
    componentDidMount(){
        setTimeout(function(){ 
            this.context.router.history.push('/recommendations');
         }.bind(this), 800);
    }
    render(){
        return(
            <div className="wrapper">
                <AppHeader />
                <div className="row m-0 guide mt-3">
                    <div className="guideDialog pr-4 pt-4 pl-4">
                        <span>
                            <i>Let's see what we have for you today !</i>
                        </span>
                    </div>
                </div>
                <div className="row m-0 mt-5">
                    <div className="loadingContainer">
                        <div className="loadLogo">
                            <img src={require('../../images/faid-logo-trans.png')} alt="" className="" />
                        </div>
                        <div className="loadAvatar">
                            <img src={require('../../images/guide.png')} alt="" className="" />
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}

Loading.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Loading;