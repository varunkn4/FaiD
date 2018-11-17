import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';

class Recommendations extends Component{
    recomExplore(item){
        this.context.router.history.push('/explore');
    }
    recomCrave(item){
        this.context.router.history.push('/crave');
    }
    recomHunt(item){
        this.context.router.history.push('/hunt');
    }
    render(){
        return(
            <div className="wrapper">
                <AppHeader />
                <div className="row m-0 guide mt-5">
                    <div className="recommendContainer">
                        <div className="row m-0">
                            <div className="col-3 p-0">
                                <div className="recomImage">
                                    <img src={require('../../images/chicken-soup.jpg')} alt="" className="" />
                                </div>
                            </div>
                            <div className="col-9 p-0 pl-2">
                                <div className="recomTitle">
                                    <p className="mainTitle">Chicken Clear Soup</p>
                                    <p className="cuisineLabel">Chinese</p>
                                </div>
                                <div className="recomButtons">
                                    <div className="row m-0">
                                        <div className="col-4 pr-1 pl-0">
                                            <button className="recomClick btn-success" onClick={()=>this.recomExplore("ChickenClearSoup")}>Explore</button>
                                        </div>
                                        <div className="col-4 pr-1 pl-1">
                                            <button className="recomClick btn-primary" onClick={()=>this.recomHunt("ChickenClearSoup")}>Hunt</button>
                                        </div>
                                        <div className="col-4 pr-0 pl-1">
                                            <button className="recomClick btn-danger" onClick={()=>this.recomCrave("ChickenClearSoup")}>Crave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reconDesc">
                            <p className="dishDesc">
                                Made from chicken, with various other ingredients. Consists of a clear chicken broth, 
                                with chicken or vegetables.
                            </p>
                        </div>
                    </div>
                    <div className="recommendContainer">
                    <div className="row m-0">
                            <div className="col-3 p-0">
                                <div className="recomImage">
                                    <img src={require('../../images/apple-pie.png')} alt="" className="" />
                                </div>
                            </div>
                            <div className="col-9 p-0 pl-2">
                                <div className="recomTitle">
                                    <p className="mainTitle">Apple Pie</p>
                                    <p className="cuisineLabel">English</p>
                                </div>
                                <div className="recomButtons">
                                    <div className="row m-0">
                                        <div className="col-4 pr-1 pl-0">
                                            <button className="recomClick btn-success disabled" disabled>Explore</button>
                                        </div>
                                        <div className="col-4 pr-1 pl-1">
                                            <button className="recomClick btn-primary disabled" disabled>Hunt</button>
                                        </div>
                                        <div className="col-4 pr-0 pl-1">
                                            <button className="recomClick btn-danger disabled" disabled>Crave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reconDesc">
                            <p className="dishDesc">
                                Apple pie is a pie or a tart, in which the principal filling ingredient is apple.
                                Served with whipped cream or ice cream.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Recommendations.contextTypes = {
    router: PropTypes.object.isRequired
  }

export default Recommendations;