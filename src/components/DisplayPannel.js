import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { warpperMyContext } from '../context/MyContext'
import './css/Pannel.css'

class DisplayPannel extends React.Component {
    constructor(props) {
        super(props);
        console.log("DisplayPannel constructor" + props.kkk);
    }
    render() {
        ///ㄴ머ㅏㅇ리마오ㅓ라
        return (
            <div className="DisplayPannelBody">
                Name: {this.props.context.state.name}<br />
                Age:  {this.props.context.state.age}<br />
                Gender:  {this.props.context.state.isMale ? "남자" : "여자"}
            </div>
        );
    }
}

/*
<SecondContext.Consumer>
    {(context) => (
        <div className="DisplayPannelBody">
            Name: {this.props.context.state.name}<br />
            Age:  {this.props.context.state.age}<br />
            Gender:  {this.props.context.state.isMale ? "ë궓ì옄" : "ì뿬ì옄"}
            phone:  {context.state.phone}
        </div>
    )}
</SecondContext.Consumer>
*/

export default warpperMyContext(DisplayPannel);