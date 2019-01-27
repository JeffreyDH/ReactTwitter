import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
class SearchBar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = 
      {
        isShowing:true
      }
  }

  getValidationState() {
    return 'warning';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Search</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Search for your friend's names!</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default SearchBar;