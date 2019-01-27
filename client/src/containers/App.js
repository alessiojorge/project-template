import React, { Component, Fragment } from 'react';

import beyState from '../bey/state';
import { Subscribe } from 'bey';

import { Menu } from '../components/UI';

class App extends Component {
  render() {
    return (
      <Subscribe to={beyState} on={state => state.menuToggle}>
        {menuToggle => (
          <Fragment>
            <span>{menuToggle ? 'true' : 'false'}</span>
            <Menu />
          </Fragment>
        )}
      </Subscribe>
    );
  }
}

export default App;
