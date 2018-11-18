import React, { Component } from 'react';
import AppHeader from '../../containers/appHeader/AppHeader';
import PropTypes from 'prop-types';

class Explore extends Component{
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
                <div className="row m-0 mt-3">
                    <div className="col-12 itemImageLarge">
                        <img src={require('../../images/chicken-soup-full.jpg')} alt="" className="" />
                    </div>
                </div> 
                <div className="row m-0 mt-1">
                    <div className="col-12 itemContents">
                        <h5>Contents</h5>
                        <p>
                            Chicken, Onions, Carrots, Garlic, Thyme, Ginger, Green Chilly,
                            Corn Flour, Soy Sauce, Pepper, Red Chilly, Water, Salt
                        </p>
                    </div>
                </div>
                <div className="row m-0 mt-1">
                    <div className="col-12 itemAvail">
                        <h5>Availability</h5>
                        <div className="availOutlet">
                            <label htmlFor="">The Grand Hyatt Hotel</label>
                            <span>Chinese, Thai</span>
                        </div>
                    </div>
                </div>
                <div className="row m-0 mt-4">
                    <div className="col-6 pr-1">
                        <button className="goBack btn-success" onClick={()=>this.goToPrev()}>Back</button>
                    </div>
                    <div className="col-6 pl-1">
                        <button className="goBack btn-primary disabled" >Recipe</button>
                    </div>
                </div>
            </div>            
        );
    }
}

Explore.contextTypes = {
    router: PropTypes.object.isRequired
  }

export default Explore;