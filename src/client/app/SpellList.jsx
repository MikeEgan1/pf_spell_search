import React from 'react';
import Spell from './Spell.jsx'

class SpellList extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            spells : this.props.spells,
            sort : "name",
            sort_order : "asc",
            filters : {
                "name" : "bl"
            }
        }
    }

    sort_and_filter(spells) {
        spells = this.filter_by_field(spells, "name");

        spells.sort(function(a, b) {
            return a[this.state.sort].localeCompare(b[this.state.sort]) * (this.state.sort_order === "asc" ? 1 : -1);
        }.bind(this));

        return spells;
    }

    filter_by_field(spells, field) {
        return spells.filter(function(el){
            return this.state.filters[field] === "" || el[field].toLowerCase().indexOf(this.state.filters[field].toLowerCase()) > -1;
        }.bind(this));
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
        if(typeof this.state.spells === "undefined") {
            return (
                <div>
                </div>
            )
        }

        var spells = this.sort_and_filter(this.state.spells);

        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th onClick={() => this.change_sort("name")}>Name</th>
                        <th onClick={() => this.change_sort("description")}>Description</th>
                        <th onClick={() => this.change_sort("school")}>School</th>
                        <th onClick={() => this.change_sort("classes")}>Classes</th>
                        <th onClick={() => this.change_sort("cast")}>Cast Time</th>
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