import React from 'react'
import CheckBoxFilter from './CheckBoxFilter'

const classes = [
  'Bard',
  'Cleric',
  'Druid',
  'Paladin',
  'Ranger',
  'Sorcerer',
  'Wizard'
];

class ClassFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.showFilter) {
      return(
        <span>
          <span onClick={() => this.props.onClickClassQuestion("classes")}>[?]</span>
          <CheckBoxFilter options={classes} onChange={this.props.onClassChecked} />
        </span>
      )
    } else {
      return (
        <span onClick={() => this.props.onClickClassQuestion("classes")}>[?]</span>
      )
    }
  }
}

export default ClassFilter;