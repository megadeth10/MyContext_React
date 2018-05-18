import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyContext = React.createContext();

class MyProvider extends React.Component {
    state = {
        name: 'aaa',
        age: 11,
        isMale: false
    }

    action = {
        increaseAge: () => { this.setState({ age: this.state.age + 1 }); },
        changeName : (text) => {this.setState({name:text});}
    }

    render() {
        const state = this.state;
        const action = this.action;
        const data = { state, action };
        return (
            <MyContext.Provider value={data} >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

function warpperContext(_Item) {
    return function sample(props) {
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <_Item
                            context={context}
                        />
                    )
                }
            </MyContext.Consumer>
        );
    }
}

export {MyProvider, warpperContext};