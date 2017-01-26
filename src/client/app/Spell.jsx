import React from 'react'

class Spell extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.spell_name}</p>
            </div>
        )
    }
}


export default Spell;
