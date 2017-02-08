import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Page from './Page'
import spellListApp from './reducers'

const store = createStore(
    spellListApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Page />
    </Provider>,
    document.getElementById('app')
)