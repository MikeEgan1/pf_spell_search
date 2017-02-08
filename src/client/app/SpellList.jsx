import React from 'react';
import Spell from './Spell'

class SpellList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(typeof this.props.spells === "undefined") {
            return (
                <div>
                </div>
            )
        }

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th onClick={() => this.props.onChangeSort("name")}>Name</th>
                        <th onClick={() => this.props.onChangeSort("description")}>Description</th>
                        <th onClick={() => this.props.onChangeSort("school")}>School</th>
                        <th onClick={() => this.props.onChangeSort("classes")}>Classes</th>
                        <th onClick={() => this.props.onChangeSort("cast")}>Cast Time</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.spells.map(function(spell){
                        return <Spell
                            name={spell.name}
                            description={spell.description}
                            school={spell.school}
                            cast={spell.cast}
                            classes={spell.classes} />
                    })}
                </tbody>
            </table>

        )
    }
}

export default SpellList;