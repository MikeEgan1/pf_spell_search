import React from 'react';
import SpellList from './SpellList.jsx';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <SpellList />
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
