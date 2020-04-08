import React from 'react';
import PropTypes from 'prop-types'
import "./counter.less"

const Counter = ({count, onIncrement, onDecrement}) => {
    return (
        <div>
            <h2>redux counter</h2>
            <button onClick={onDecrement}>-</button>
            <span>{count}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    )
};

Counter.defaultProps = {
    count: 0
};

Counter.protoType = {
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    count      : PropTypes.number.isRequired
};

export default Counter;

