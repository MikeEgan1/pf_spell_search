import React from 'react';
import SpellList from './SpellList.jsx';
import Header from './Header.jsx';
import {render} from 'react-dom';

class App extends React.Component {

  render () {
    var jsonSpells = require('!json!./data/spells.json').spells;
    return (
      <span>
        <Header />
        <SpellList spells={jsonSpells} />
      </span>
    );
  }
}
render(<App/>, document.getElementById('app'));