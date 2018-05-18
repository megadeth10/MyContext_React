import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MyContext, MyProvider, warpperContext } from '../context/MyContext'

class Person2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        if (value) {
            this.setState({ textValue: value });
        }
    }

    handleClick = (e) => {
        const { textValue } = this.state;

        if (textValue) {
            this.props.context.action.changeName(textValue);
            this.setState({textValue:''});
        }

        e.preventDefault();
    }

    render() {
        return (
            <div> I'm {this.props.context.state.name}
                I'm {this.props.context.state.age}
                <button
                    onClick={() => this.props.context.action.increaseAge()} > +
                </button>
                <br />
                <input
                    type="text"
                    value={this.state.textValue}
                    onChange={this.handleChange}
                />
                <button
                    onClick={this.handleClick}>이름변경
                </button>
            </div>
        );
    }
}

// export default Person2;
export default warpperContext(Person2);