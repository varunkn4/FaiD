import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logoutConfirmation: 'hidden'
        }
    }
    homeRedirect(){
        this.context.router.history.push('/home');
    }
    logout(){
        this.setState({logoutConfirmation:'visible'});
    }
    loinRedirect(){
        this.setState({registrationCompleteStatus:'hidden'});
        this.context.router.history.push('/login');
    }
    render(){
        return (
            <div className="appHead">
                <div className="row m-0 h-100">
                    <div className="col-6 h-100 p-0">
                        <div className="logoHead" onClick={()=>this.homeRedirect()}>
                            <img src={require('../../images/faid-logo-trans.png')} alt="Home" className="homeLogo mt-1" />
                        </div>
                    </div>
                    <div className="col-6 h-100">
                        <div className="mainMenu right" onClick={()=>this.logout()}>
                            <img src={require('../../images/faid.png')} alt="Menu" className="menuIcon mt-1" />
                        </div>
                    </div>
                </div>
                <div className={"registerUserPopUp " + this.state.logoutConfirmation}>
                    <div className="proceedDialog pt-4">
                        <p>Logged out Successfully!!</p>
                        <button type="button" onClick={() => this.loinRedirect()}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

AppHeader.contextTypes = {
    router: PropTypes.object.isRequired
}

export default AppHeader;
