import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'milk', label: 'Milk' },
    { value: 'nuts', label: 'Nuts' },
    { value: 'shellFish', label: 'Shell Fish' },
    { value: 'cinnamon', label: 'Cinnamon' },
    { value: 'egg', label: 'Eggs' }
  ];

class Dropdown extends Component {
    state = {
        selectedOption: null,
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        this.props.onSelect(selectedOption);
    }
    render(){
        const { selectedOption } = this.state;
        return(
            <Select value={selectedOption}  onChange={this.handleChange} options={options} isMulti classNamePrefix="dropdown" menuPlacement="auto" />
        );
    }
}

export default Dropdown;