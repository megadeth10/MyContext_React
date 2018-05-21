import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { warpperMyContext } from '../context/MyContext';
import Style from './css/Pannel.css';

const propTypes = {
}

const defaultProps = {
}

class InputPannel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: props.initailName ? props.initailName : ''
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
            <div className="InputPannel">
                <button
                    onClick={() => this.props.context.action.increaseAge()} >나이추가
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
        )
    }
};

InputPannel.defaultProps = defaultProps;
InputPannel.propTypes = propTypes;

export default warpperMyContext(InputPannel);