import {connect} from 'react-redux';
import {incrementAction, decrementAction} from "../actions";
import {Counter} from '../components'

const mapStateToProps = (state) => ({
    count: state.counter.count
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction())
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter)

