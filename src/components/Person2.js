import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MyContext, MyProvider, warpperContext } from '../context/MyContext'

class Person2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div> I'm {this.props.context.state.name}
                I'm {this.props.context.state.age}
                <button onClick={() => this.props.context.action.increaseAge()} > + </button>
            </div>
        );
    }
}

// export default Person2;
export default warpperContext(Person2);