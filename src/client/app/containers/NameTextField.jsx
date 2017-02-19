import { connect } from 'react-redux';
import NameFilter from '../NameFilter';
import { addNameFilter, toggleVisibilityFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    name: state.filters.name,
    showFilter: state.visible_filters.name
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNameFieldChange: (filter) => {
      dispatch(addNameFilter(filter))
    },
    onClickNameQuestion: (filter) => {
      dispatch(toggleVisibilityFilter(filter))
    }
  }
};

const NameTextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameFilter);

export default NameTextField