import { SORT_BY, SORT_ORDER } from '../actions/index.jsx';

const initialState = {
    filters : {},
    spells : {},
    sort : SORT_BY.NAME,
    sort_order : SORT_ORDER.ASC,
};

function spellListApp(state = initialState, action) {
    switch (action.type) {
        case FILTER_BY_SPELL_NAME:
            return Object.assign({}.state.filters, {
                name: acton.text
            });
        default:
            return state;
    }
}

export default spellListApp;