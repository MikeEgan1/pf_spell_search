import React from 'react';
import CheckBoxFilter from './CheckBoxFilter';

const spell_schools = [
  'Abjuration',
  'Conjuration',
  'Divination',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Transmutation',
];


class SchoolFilter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.showFilter) {
      return(
        <span>
          <span onClick={() => this.props.onClickSchoolQuestion()}>[?]</span>
          <CheckBoxFilter options={spell_schools} onChange={this.props.onSchoolChecked} />
        </span>
      )
    } else {
      return (
        <span onClick={() => this.props.onClickSchoolQuestion()}>[?]</span>
      )
    }
  }
}

export default SchoolFilter;