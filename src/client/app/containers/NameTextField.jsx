import { connect } from 'react-redux';
import NameFilter from '../NameFilter';
import { addNameFilter } from '../actions';

const mapStateToProps = (state) => {
    return {
        name : state.filters.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNameFieldChange: (filter) => {
            dispatch(addNameFilter(filter))
        }
    }
}

const NameTextField = connect(
    mapStateToProps,
    mapDispatchToProps
)(NameFilter);

export default NameTextField