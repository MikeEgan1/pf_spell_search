import { connect } from 'react-redux';
import SchoolFilter from '../components/SchoolFilter';
import { toggleVisibilityFilter, addSchoolFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    schools: state.filters.schools,
    showFilter: state.visible_filters.school
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSchoolChecked: (event) => {
      dispatch(addSchoolFilter(event.target.value));
    },
    onClickSchoolQuestion: (filter) => {
      dispatch(toggleVisibilityFilter(filter));
    }
  }
};

const SchoolFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SchoolFilter);

export default SchoolFilterContainer;