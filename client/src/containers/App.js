import React, { Component } from 'react';
import Aux from '../hoc/Auxillary';

import { connect } from 'react-redux';
import * as baseActions from '../store/actions/baseActions';

class App extends Component {
  componentDidMount() {
    this.props.baseActionInitialisation();
  }
  render() {
    return (
      <Aux>
        <header className="header" style={{ animation: 'fadeIn 1s' }}>
          HEADER
        </header>

        <main>MAIN</main>

        <footer className="footer">FOOTER</footer>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  };
};

const mapDispatchToProps = dispatch => {
  return {
    baseActionInitialisation: () =>
      dispatch(baseActions.baseActionInitialisation())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
