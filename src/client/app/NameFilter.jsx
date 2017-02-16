import React from 'react';
import {addFilter} from './actions/'

class NameFilter extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.onNameFieldChange(event.target.value)
  }

  render() {
    if (this.props.showFilter) {
      return (
        <span>
          <span onClick={() => this.props.onClickNameQuestion()}>[?]</span>
          <input type="text" onChange={this.handleChange.bind(this)}/>
        </span>
      )
    } else {
      return (
        <span onClick={() => this.props.onClickNameQuestion()}>[?]</span>
      )
    }

  }
}

export default NameFilter;