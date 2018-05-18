import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Pannel.css';
import {warpperContext} from '../context/MyContext';

const propTypes = {
}

const defaultProps = {
}

class ExtrasPannel extends Component {
    constructor(props) {
        super(props);
        this.handleGender = this.handleGender.bind(this);
    }

    handleGender = (e) => {
        this.props.context.action.changeGender()
        e.preventDefault();
    }
    render() {
        return (
            <div className="ExtraPannel">
                <button onClick={this.handleGender}>성별 변경</button>
            </div>
        )
    }
};

ExtrasPannel.defaultProps = defaultProps;
ExtrasPannel.propTypes = propTypes;

export default warpperContext(ExtrasPannel);