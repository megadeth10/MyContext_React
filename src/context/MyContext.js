import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MyContext = React.createContext("MyContext");

class MyProvider extends React.Component {
    state = {
        name: 'aaa',
        age: 11,
        isMale: false
    }

    action = {
        increaseAge: () => { this.setState({ age: this.state.age + 1 }); },
        changeName : (text) => {this.setState({name:text});},
        changeGender: () => {this.setState({isMale: !this.state.isMale});}
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

function warpperMyContext(_Item) {//consumer Component
    return function sample(props) {//comsumer Component의 *****props 값       
        return (
            <MyContext.Consumer>
                {
                    (context) => (
                        <_Item
                            {...props}
                            context={context}
                            
                        />
                    )
                }
            </MyContext.Consumer>
        );
    }
}

export {MyProvider, warpperMyContext};