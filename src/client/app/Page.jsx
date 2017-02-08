import React from 'react';
import VisibleSpellList from './containers/VisibleSpellList';
import Header from './Header';
import NameTextField from './containers/NameTextField';

class Page extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        var jsonSpells = require('!json!./data/spells.json').spells;
        return (
            <div>
                <Header />
                <NameTextField />
                <VisibleSpellList />
            </div>
        )
    }
}
export default Page;