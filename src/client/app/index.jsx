import React from 'react';
import {render} from 'react-dom';
import Spell from './Spell.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <Spell spell_name="test" />
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
