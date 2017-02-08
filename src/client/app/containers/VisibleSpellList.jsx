import { connect } from 'react-redux';
import SpellList from '../SpellList';
import { changeSort } from '../actions';


const getVisibleSpells = (state) => {
    var spells = filterByFieldName(state.spells, state.filters, "name");

    spells.sort(function(a, b) {
        return a[state.sort].localeCompare(b[state.sort]) * (state.sort_order === "asc" ? 1 : -1);
    });

    return spells;
};

const filterByFieldName = (spells, filters, field) => {
    return spells.filter(function(el){
        return filters[field] === "" || el[field].toLowerCase().indexOf(filters[field].toLowerCase()) > -1;
    });
}

const mapStateToProps = (state) => {
    return {
        spells : getVisibleSpells(state),
        sort : state.sort,
        sort_order : state.sort_order,
        filters : state.filters
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