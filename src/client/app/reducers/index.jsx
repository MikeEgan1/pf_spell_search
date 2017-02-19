import {SORT_BY, SORT_ORDER} from '../actions/index.jsx';


//The goal is to consolidate filter visibily into a single field, at worst, an array
const initialState = {
  filters: {
    name: "",
    school: []
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
    case 'ADD_SCHOOL_FILTER' :
      let school_filters = state.filters.school;

      if(school_filters.indexOf(action.school) >= 0){
        school_filters.splice(school_filters.indexOf(action.school), 1);
        return Object.assign({}, state, {
          filters: Object.assign({}, state.filters, {
            school: school_filters
          })
        });
      } else {
        school_filters.push(action.school);
        return Object.assign({}, state, {
          filters: Object.assign({}, state.filters, {
            school: school_filters
          })
        });
      }
    case 'TOGGLE_NAME_FILTER' :
      return Object.assign({}, state, {
        show_name_filter: !state.show_name_filter
      });
    case 'TOOGLE_SCHOOL_FILTER' :
      return Object.assign({}, state, {
        show_school_filter: !state.show_school_filter
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