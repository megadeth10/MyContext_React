import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {warpperContext} from '../context/MyContext'

class DisplayPannel extends React.Component {
    render() {
        return (
            <div>
                 I'm {this.props.context.state.name}
                I'm {this.props.context.state.age}
            </div>
        );
    }
}

export default warpperContext(DisplayPannel);