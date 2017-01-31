import React from 'react';
import Spell from './Spell.jsx'

class SpellList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        var jsonSpells = require('!json!./data/spells.json').spells;
        this.setState(
            {
                spells : jsonSpells,
                sort : "name",
                sort_order : "asc"
            }
        );
    }

    change_sort(column) {

        if(this.state.sort === column) {
            if(this.state.sort_order === "asc") {
                this.setState({sort_order : "desc"});
            } else {
                this.setState({sort_order : "asc"});
            }
        } else {
            this.setState({sort: column, "sort_order" : "asc"});
        }
    }

    render() {
        var spells = this.state.spells;
        spells.sort(function(a, b) {
            console.log(this.state.sort);
            return a[this.state.sort].localeCompare(b[this.state.sort]);
        }.bind(this));

        console.log(spells);

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th onClick={() => this.change_sort("name")}>Name</th>
                        <th onClick={() => this.change_sort("description")}>Description</th>
                        <th>School</th>
                        <th>Classes</th>
                        <th>Cast Time</th>
                    </tr>
                </thead>
                <tbody>

                    {spells.map(function(spell){
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