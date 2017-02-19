import React from 'react';

class CheckBoxFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <span>
      {this.props.options.map(function (option) {
        return <span><input
          type="checkbox"
          value={option}
          onChange={this.props.onChange}
        /> {option}</span>
      }.bind(this))}
      </span>
    )
  }
}

export default CheckBoxFilter;