import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

class Calender extends Component{
    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(date) {
        this.setState({startDate:date});
        var getDateValue = moment(date).format('D/M/YYYY'); 
        this.props.calenderInput(getDateValue);
      }
    render() {
        return(
            <DatePicker 
              selected={this.state.startDate}
              onChange={this.handleChange}
              className={this.props.calenderClass} 
              maxDate={moment()} 
              withPortal              
              showMonthDropdown
              showYearDropdown
              dropdownMode="select" 
              dateFormat="Do MMMM YYYY"
            />
        );
    }
}

export default Calender;