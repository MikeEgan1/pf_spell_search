import {SORT_BY, SORT_ORDER} from '../actions/index.jsx';


//The goal is to consolidate filter visibily into a single field, at worst, an array
const initialState = {
  filters: {
    name: "",
    school: [],
    classes: [],
  },
  visible_filters: {
    name: false,
    school: false,
    classes: false
  },
  spells: require('!json!../data/spells.json').spells,
  sort: SORT_BY.NAME,
  sort_order: SORT_ORDER.ASC,
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

      if(school_filters.indexOf(action.school) > -1){
        school_filters.splice(school_filters.indexOf(action.school), 1);
      } else {
        school_filters.push(action.school);
      }

      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, {
          school: school_filters
        })
      });

    case 'ADD_CLASS_FILTER':
      let class_filters = state.filters.classes;

      if(class_filters.indexOf(action.class_name) > -1){
        class_filters.splice(class_filters.indexOf(action.class_name), 1);
      } else {
        class_filters.push(action.class_name);
      }

      return Object.assign({}, state, {
        filters: Object.assign({}, state.filters, {
          classes: class_filters
        })
      });


    case 'TOGGLE_FILTER_VISIBILITY':
      let visibility = state.visible_filters;
      visibility[action.filter] = !visibility[action.filter];

      return Object.assign({}, state, {
        visible_filters: visibility
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