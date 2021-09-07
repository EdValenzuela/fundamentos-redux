import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../store'

const Counter = props => {

    const { count, increment, decrement } = props;

    return (
        <div>
            <button onClick={ increment } >+</button>
            <button onClick={ decrement }>-</button>

            <h1>{ count }</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        count: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
