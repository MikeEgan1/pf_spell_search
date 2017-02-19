import React from 'react';

class CheckBoxFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="list-unstyled">
      {this.props.options.map(function (option) {
        return <li><input
          type="checkbox"
          value={option}
          onChange={this.props.onChange}
        /> {option}</li>
      }.bind(this))}
      </ul>
    )
  }
}

export default CheckBoxFilter;