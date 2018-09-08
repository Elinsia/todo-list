import React, { Component } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { filters } from '../../actions/constants';

class FiltersTodo extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <RadioGroup
        className="filter-group"
        aria-label="Filter"
        name="filter"
        value={this.props.filter}
        onChange={this.handleChange}
        row
      >
        <FormControlLabel value={filters.SHOW_ALL} control={<Radio />} label="All" />
        <FormControlLabel value={filters.SHOW_ACTIVE} control={<Radio />} label="Active" />
        <FormControlLabel value={filters.SHOW_DONE} control={<Radio />} label="Done" />
      </RadioGroup>
    );
  }
}

export default FiltersTodo;
