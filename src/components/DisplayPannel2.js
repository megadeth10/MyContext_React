import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { wapperComponent } from '../context/SecondContext';

const propTypes = {
}

const defaultProps = {
}

class DisplayPannel2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            phone: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange = (e) => {
        const data = {};
        data[e.target.name] = e.target.value;
        if (data) {
            this.setState(data);
        }
    }

    handleClick = (e) => {
        switch (e.target.name) {
            case "address": {
                if (this.state.address) {
                    const address = this.state.address;
                    this.props.context.action.changeAddress(address);
                    this.setState({address: ''});
                    
                }
                break;
            }
            case "phone": {
                if (this.state.phone) {
                    const phone = this.state.phone;
                    this.props.context.action.changePhone(phone);
                    this.setState({phone: ''});
                }
                break;
            }
            default:
                break;
        }
    }

    render() {
        return (
            <div>
                주소 : {this.props.context.state.address}<br />
                전화번호 : {this.props.context.state.phone}<br />
                <input
                    type="text"
                    value={this.state.address}
                    name="address"
                    onChange={this.handleChange} />
                <button onClick={this.handleClick} name="address">주소변경</button><br />
                <input
                    type="text"
                    value={this.state.phone}
                    name="phone"
                    onChange={this.handleChange} />
                <button onClick={this.handleClick} name="phone">전화번호변경</button>
            </div>
        )
    }
};

DisplayPannel2.defaultProps = defaultProps;
DisplayPannel2.propTypes = propTypes;

export default wapperComponent(DisplayPannel2);