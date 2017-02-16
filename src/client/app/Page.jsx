import React from 'react';
import VisibleSpellList from './containers/VisibleSpellList';
import Header from './Header';

class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var jsonSpells = require('!json!./data/spells.json').spells;
        return (
            <div>
                <Header />
                <VisibleSpellList />
            </div>
        )
    }
}
export default Page;