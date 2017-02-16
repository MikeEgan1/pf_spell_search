import React from 'react';
import Spell from './Spell'
import NameTextField from './containers/NameTextField';

class SpellList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.spells === "undefined") {
      return (
        <div>
        </div>
      )
    }

    return (
      <table className="table table-striped">
        <thead>
        <tr>
          <th><span onClick={() => this.props.onChangeSort("name")}>Name</span> <NameTextField /></th>
          <th><span onClick={() => this.props.onChangeSort("description")}>Description</span></th>
          <th><span onClick={() => this.props.onChangeSort("school")}>School</span></th>
          <th><span onClick={() => this.props.onChangeSort("classes")}>Classes</span></th>
          <th><span onClick={() => this.props.onChangeSort("cast")}>Cast Time</span></th>
          <th><span onClick={() => this.props.onChangeSort("source")}>Source</span></th>
        </tr>
        </thead>
        <tbody>
        {this.props.spells.map(function (spell) {
          return <Spell
            name={spell.name}
            description={spell.description}
            school={spell.school}
            cast={spell.cast}
            classes={spell.classes}
            source={spell.source}/>
        })}
        </tbody>
      </table>

    )
  }
}

export default SpellList;