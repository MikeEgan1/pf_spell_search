import { connect } from 'react-redux';
import SchoolFilter from '../components/SchoolFilter';
import { toggleSchoolFilter, addSchoolFilter } from '../actions';

const mapStateToProps = (state) => {
  return {
    schools: state.filters.schools,
    showFilter: state.show_school_filter
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    onSchoolChecked: (event) => {
      dispatch(addSchoolFilter(event.target.value));
    },
    onClickSchoolQuestion: () => {
      dispatch(toggleSchoolFilter());
    }
  }
};

const SchoolFilterContainer = connect(
  mapStateToProps,
  mapDistachToProps,
)(SchoolFilter);

export default SchoolFilterContainer;