import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';

class Hunt extends Component{
    goToPrev(){
        this.context.router.history.push('/recommendations');
    }
    render(){
        return(
            <div className="wrapper">
                <AppHeader />
                <div className="row m-0 guide mt-3">  
                    <div className="row m-0 pt-4">
                        <div className="col-12">
                            <span className="foodTitle">Chicken Clear Soup</span>
                        </div>
                    </div>  
                    <div className="row m-0">
                        <div className="col-12">
                            <span className="foodCuisine">Chinese</span>
                        </div>
                    </div>
                </div>
                <div className="row m-0 guide mt-2">
                    <div className="shopContainer">
                        <div className="row m-0">
                            <div className="col-4 p-0">
                                <div className="shopImage">
                                    <img src={require('../../images/hotel-1.jpg')} alt="" className="" />
                                </div>
                            </div>
                            <div className="col-8 p-0 pl-2">
                                <div className="shopTitle">
                                    <p className="mainTitle">The Grand Hyatt Hotel</p>
                                    <p className="cuisineLabel">Wellington Island</p>
                                </div>
                                <div className="shopButtons">
                                    <div className="row m-0">
                                        <div className="col-6 pr-1 pl-0">
                                            <button className="shopClick btn-primary disabled">Menu</button>
                                        </div>
                                        <div className="col-6 pr-0 pl-1">
                                            <button className="shopClick btn-danger disabled">Crave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <span className="rating btn-success">4.5</span>                   
                    </div>
                    <div className="shopContainer">
                        <div className="row m-0">
                            <div className="col-4 p-0">
                                <div className="shopImage">
                                    <img src={require('../../images/hotel-2.jpeg')} alt="" className="" />
                                </div>
                            </div>
                            <div className="col-8 p-0 pl-2">
                                <div className="shopTitle">
                                    <p className="mainTitle">Avenue Regent</p>
                                    <p className="cuisineLabel">MG Road</p>
                                </div>
                                <div className="shopButtons">
                                    <div className="row m-0">
                                        <div className="col-6 pr-1 pl-0">
                                            <button className="shopClick btn-primary disabled">Menu</button>
                                        </div>
                                        <div className="col-6 pr-0 pl-1">
                                            <button className="shopClick btn-danger disabled">Crave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <span className="rating btn-danger">1.9</span>                                      
                    </div>
                    <div className="shopContainer">
                        <div className="row m-0">
                            <div className="col-4 p-0">
                                <div className="shopImage">
                                    <img src={require('../../images/hotel-3.jpg')} alt="" className="" />
                                </div>
                            </div>
                            <div className="col-8 p-0 pl-2">
                                <div className="shopTitle">
                                    <p className="mainTitle">The Gateway Hotel</p>
                                    <p className="cuisineLabel">Marine Drive</p>
                                </div>
                                <div className="shopButtons">
                                    <div className="row m-0">
                                        <div className="col-6 pr-1 pl-0">
                                            <button className="shopClick btn-primary disabled">Menu</button>
                                        </div>
                                        <div className="col-6 pr-0 pl-1">
                                            <button className="shopClick btn-danger disabled">Crave</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                        <span className="rating btn-orange">3.0</span>  
                    </div>                                     
                </div>
                <div className="row m-0 mt-4">
                    <div className="col-6 pr-1">
                        <button className="goBack btn-success" onClick={()=>this.goToPrev()}>Back</button>
                    </div>
                    <div className="col-6 pl-1">
                        <button className="goBack btn-orange disabled" >More</button>
                    </div>
                </div>
            </div>            
        );
    }
}

Hunt.contextTypes = {
    router: PropTypes.object.isRequired
}

export default Hunt;