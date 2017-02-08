import React from 'react';
import { addFilter } from './actions/'

class NameFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.props.onNameFieldChange(event.target.value)
    }

    render() {
        return (
            <input type="text" onChange={this.handleChange.bind(this)} />
        )
    }
}

export default NameFilter;