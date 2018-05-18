import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayPannel from './components/DisplayPannel'
import {MyContext, MyProvider, warpperContext} from './context/MyContext'

const propTypes = {
}

const defaultProps = {
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MyProvider>
        이러쿵 저러쿵
        <DisplayPannel />
      </MyProvider>
    )
  }
};

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
