import {SORT_BY, SORT_ORDER} from '../actions/index.jsx';


//The goal is to consolidate filter visibily into a single field, at worst, an array
const initialState = {
  filters: {
    name: ""
  },
  spells: require('!json!../data/spells.json').spells,
  sort: SORT_BY.NAME,
  sort_order: SORT_ORDER.ASC,
  show_name_filter: false,
  show_school_filter: false,
};

function spellListApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NAME_FILTER' :
      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, {
          name: action.filter
        })
      });
    case 'TOGGLE_NAME_FILTER' :
      return Object.assign({}, state, {
        show_name_filter: !state.show_name_filter
      });
    case 'CHANGE_SORT' :
      if (state.sort === action.sort) {
        if (state.sort_order === SORT_ORDER.ASC) {
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
        sort: action.sort,
        sort_order: SORT_ORDER.ASC
      });
    default:
      return state;
  }
}

export default spellListApp;