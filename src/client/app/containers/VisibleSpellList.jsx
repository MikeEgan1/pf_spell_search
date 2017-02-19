import {connect} from 'react-redux';
import SpellList from '../SpellList';
import { changeSort } from '../actions';


const getVisibleSpells = (state) => {
  var spells = state.spells;
  for(var filter_item in state.filters) {
    spells = spells.filter(function(spell) {
      if(Array.isArray(state.filters[filter_item])) {
        return state.filters[filter_item].length == 0 || state.filters[filter_item].indexOf(spell[filter_item]) > -1;
      } else {
        return state.filters[filter_item] === "" || spell[filter_item].toLowerCase().indexOf(state.filters[filter_item].toLowerCase()) > -1;
      }
    });
  }

  if (Array.isArray(spells[0][state.sort])) {
    spells.sort(function (a, b) {
      return a[state.sort][0].localeCompare(b[state.sort][0]) * (state.sort_order === "asc" ? 1 : -1);
    });
  } else {
    spells.sort(function (a, b) {
      return a[state.sort].localeCompare(b[state.sort]) * (state.sort_order === "asc" ? 1 : -1);
    });
  }

  return spells;
};


const mapStateToProps = (state) => {
  return {
    spells: getVisibleSpells(state),
    sort: state.sort,
    sort_order: state.sort_order,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSort: (sort) => {
      dispatch(changeSort(sort))
    }
  }
};

const VisibleSpellList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SpellList);

export default VisibleSpellList