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
        this.setState({
          startDate: date
        });
      }
    render() {
        return(
            <DatePicker selected={this.state.startDate} onChange={this.handleChange} className={this.props.calenderClass} dateFormat="DD/MM/YYYY" maxDate={moment()} withPortal />
        );
    }
}

export default Calender;