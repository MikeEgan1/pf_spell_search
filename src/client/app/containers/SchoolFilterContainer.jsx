import { connect } from 'react-redux';
import SchoolFilter from '../components/SchoolFilter';

const mapStateToProps = (state) => {
  return {
    schools: state.filters.schools,
    showFilter: state.show_school_filter
  }
};

const mapDistachToProps = (dispatch) => {
  return {
    onSchoolChecked: (checked) => {
      return;
    },
    onClickSchoolQuestion: () => {
      dispatch(toggleSchooFilter());
    }
  }
};

const SchoolFilterContainer = connect(
  mapStateToProps,
  mapDistachToProps,
)(SchoolFilter);