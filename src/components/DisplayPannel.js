import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './Person'
import Person2 from './Person2'
import {MyContext, MyProvider, warpperContext} from '../context/MyContext'

class DisplayPannel extends React.Component {
    render() {
        return (
            <div>
                <Person />
                <br />
                <Person2 />
            </div>
        );
    }
}

export default DisplayPannel;