import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
    userSubmit = (event) => {
            event.stopPropagation();
            const { username, password } = event.target;
            const credUsername= username.value;
            const credPassword= password.value;
            this.credentialCheck(credUsername,credPassword);
    }
    credentialCheck(credUsername,credPassword){
        if(credUsername === "admin@faid.com"){
            if(credPassword === "faid@123"){
                this.context.router.history.push('/home');
            }
        }
    }
    registerUser() {
        this.context.router.history.push('/register');
    }
    render() {
        return(
            <div className="loginContainer centered pt-3">
                <div className="logo pt-5">
                    <img src={require('../../images/faid-logo-trans.png')} alt="" className="thumbnail mt-4" />
                </div>
                <div className="inputFields">
                    <form action="#" className="centered" onSubmit={this.userSubmit} autocomplete="off">
                        <div className="form-group w-100">
                            <input type="email" className="form-control userCredentials" id="username" placeholder="Username" required />
                        </div>
                        <div className="form-group w-100">
                            <input type="password" className="form-control userCredentials" id="password" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn mt-3 loginButton w-100">Login</button>
                    </form>
                </div>
                <div className="register">
                    <div className="row m-0 registerMessage">
                        <label htmlFor="">Don't have an account? <span className="registerLink" onClick={() => this.registerUser()}>Register Now!!</span></label>
                    </div>
                    <div className="row m-0">
                        <div className="col-4 pl-2 pr-1">
                            <button className="btn btn-small facebook w-100">
                                <i class="fab fa-facebook-f"></i>
                            </button>
                        </div>
                        <div className="col-4 pr-1 pl-1">
                            <button className="btn btn-small twitter w-100">
                                <i class="fab fa-twitter"></i>
                            </button>
                        </div>
                        <div className="col-4 pr-2 pl-1">
                            <button className="btn btn-small googlePlus w-100">
                                <i class="fab fa-google-plus-g"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Login;