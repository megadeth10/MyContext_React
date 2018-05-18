import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SecondContext = React.createContext("SecondContext");

class SecondProvider extends Component {
    constructor(props) {
        super(props);
    }

    //공유 변수 data
    state = {
        address: '',
        phone: ''
    };

    //공유 이벤트
    action = {
        changeAddress: (address) =>{this.setState({address});},
        changePhone: (phone) => {this.setState({phone});}
    };

    render() {
        const state = this.state;
        const action = this.action;
        const data = { state, action };
        return (
            <SecondContext.Provider value={data}>
                {this.props.children}
            </SecondContext.Provider>
        )
    }
};

const wapperComponent = (Comp) => {
    return function (prop) {
        return (
            <SecondContext.Consumer>
                {(context) => <Comp {...prop} context={context}> </Comp>}
            </SecondContext.Consumer>
        );
    }
}

export { SecondProvider, wapperComponent};