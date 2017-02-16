import React from 'react'

class Spell extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.description}</td>
        <td>{this.props.school}</td>
        <td>{this.props.classes.join(', ')}</td>
        <td>{this.props.cast}</td>
        <td>{this.props.source}</td>
      </tr>
    )
  }
}

export default Spell;
