import React from 'react';
import SpellList from './SpellList.jsx';
import Header from './Header.jsx';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <SpellList />
      </div>
    );
  }
}
render(<App/>, document.getElementById('app'));
web