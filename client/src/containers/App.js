import React, { Component } from 'react';
import Aux from '../hoc/Auxillary';

//  imports for redux and associated functionality
import { connect } from 'react-redux';
import * as baseActions from '../store/actions/baseActions';
import propTypes from 'prop-types';

//  imports for components
import { Header, Content, Footer } from '../components';

class App extends Component {
  componentDidMount() {
    this.props.baseActionInitialisation();
  }

  render() {
    return (
      <Aux>
        <Header />

        <Content />

        <Footer />
      </Aux>
    );
  }
}

App.propTypes = {
  base: propTypes.func.isRequired
};

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
