import React, { Component, Fragment } from 'react';

//  imports for redux and associated functionality
import { connect } from 'react-redux';
import * as baseActions from '../store/actions/baseActions';
import propTypes from 'prop-types';

//  imports for components
import { Header, Content, Footer, Navigation } from '../components';

class App extends Component {
  componentDidMount() {
    this.props.baseActionInitialisation();
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

App.propTypes = {
  base: propTypes.object.isRequired,
  baseActionInitialisation: propTypes.func.isRequired
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
