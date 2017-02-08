import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import spellListApp from './reducers'
import Page from './Page';

const store = createStore(spellListApp);

render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('app')
);
