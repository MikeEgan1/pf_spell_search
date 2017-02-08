import { SORT_BY, SORT_ORDER } from '../actions/index.jsx';

const initialState = {
    filters : {
        name : ""
    },
    spells : require('!json!../data/spells.json').spells,
    sort : SORT_BY.NAME,
    sort_order : SORT_ORDER.ASC,
};

function spellListApp(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NAME_FILTER' :
            return Object.assign({}, state, {
                filters: Object.assign({}, state.filters, {
                    name : action.filter
                })
            });
        case 'CHANGE_SORT' :
            if(state.sort === action.sort){
                if(state.sort_order === SORT_ORDER.ASC) {
                    return Object.assign({}, state, {
                        sort_order: SORT_ORDER.DESC
                    });
                } else {
                    return Object.assign({}, state, {
                        sort_order: SORT_ORDER.ASC
                    });
                }
            }
            return Object.assign({}, state, {
                sort : action.sort,
                sort_order: SORT_ORDER.ASC
            });
        default:
            return state;
    }
}

export default spellListApp;