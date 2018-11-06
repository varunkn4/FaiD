import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

class Location extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        country: '',
        region: ''
      }
    }
    selectCountry (val) {
        this.setState({ country: val });
        this.props.countryValue(val);
    }     
    selectRegion (val) {
        this.setState({ region: val });
        this.props.regionValue(val);
    }
    render() {
        const { country, region } = this.state;
        return (
            <div>                
                <div className="locationOverlay">
                    <CountryDropdown
                        value={country}
                        onChange={(val) => this.selectCountry(val)} 
                        defaultOptionLabel="Select Country" 
                    />
                    <RegionDropdown
                        country={country}
                        value={region}
                        onChange={(val) => this.selectRegion(val)} 
                        defaultOptionLabel="Select Region" 
                    />
                </div> 
            </div>
          );
    }

}


export default Location;