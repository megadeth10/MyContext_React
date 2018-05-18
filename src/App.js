import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayPannel from './components/DisplayPannel';
import InputPannel from './components/InputPannel';
import ExtrasPannel from './components/ExtrasPannel';
import DisplayPannel2 from './components/DisplayPannel2';
import {MyProvider} from './context/MyContext';
import {SecondProvider} from './context/SecondContext';
import AddProvider from './context/AddProvider';

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
      <AddProvider contexts={[MyProvider, SecondProvider]}>
        이러쿵 저러쿵
        <DisplayPannel />
        <InputPannel initailName="이름" />
        <ExtrasPannel />
        <DisplayPannel2 />
      </AddProvider>
    )
  }
};

App.defaultProps = defaultProps;
App.propTypes = propTypes;

export default App;
