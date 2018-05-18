import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {MyContext, MyProvider, warpperContext} from '../context/MyContext'

class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MyContext.Consumer>
        {
          (context) => (
            <div> I'm {context.state.name}
              I'm {context.state.age}
              <button onClick={() => context.action.increaseAge()} > + </button>
            </div>
          )
        }
      </MyContext.Consumer>

    );
  }
}

export default Person;