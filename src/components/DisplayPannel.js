import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {warpperContext} from '../context/MyContext'
import './css/Pannel.css'

class DisplayPannel extends React.Component {
    constructor(props){
        super(props);
        console.log("DisplayPannel constructor" + props.kkk);
    }
    render() {
        ///ㄴ머ㅏㅇ리마오ㅓ라
        return (
            <div className="DisplayPannelBody">
                Name: {this.props.context.state.name}<br/>
                Age:  {this.props.context.state.age}<br/>
                Gender:  {this.props.context.state.isMale ? "남자" : "여자"}
            </div>
        );
    }
}

export default warpperContext(DisplayPannel);