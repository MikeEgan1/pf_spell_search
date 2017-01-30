import React from 'react';
import Spell from './Spell.jsx'

class SpellList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul className="list-unstyled">
                    <li><Spell spell_name="Detect Magic" /></li>
                </ul>

            </div>

        )
    }
}

export default SpellList;