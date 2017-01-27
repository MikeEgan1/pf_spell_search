import React from 'react';
import Spell from './Spell.jsx'

class SpellList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Spell spell_name="Detect Magic" />
                <Spell spell_name="Magic Missle" />
                <Spell spell_name="Burning Hand" />
                <Spell spell_name="Bless" />

            </div>

        )
    }
}

export default SpellList;