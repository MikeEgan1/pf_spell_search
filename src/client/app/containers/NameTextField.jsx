import { connect } from 'react-redux';
import NameFilter from '../NameFilter';
import { addNameFilter, toggleNameFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    name: state.filters.name,
    showFilter: state.show_name_filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNameFieldChange: (filter) => {
      dispatch(addNameFilter(filter))
    },
    onClickNameQuestion: () => {
      dispatch(toggleNameFilter())
    }
  }
};

const NameTextField = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameFilter);

export default NameTextField