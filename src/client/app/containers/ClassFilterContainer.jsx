import { connect } from 'react-redux';
import ClassFilter from '../components/ClassFilter';
import { toggleVisibilityFilter, addClassFilter} from '../actions';

const mapStateToProps = (state) => {
  return {
    classes: state.filters.classes,
    showFilter: state.visible_filters.classes
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClassChecked: (event) => {
      dispatch(addClassFilter(event.target.value));
    },
    onClickClassQuestion: (filter) => {
      dispatch(toggleVisibilityFilter(filter))
    }
  }
};

const ClassFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassFilter);

export default ClassFilterContainer;