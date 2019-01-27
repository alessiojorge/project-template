import React, { Component } from 'react';

import beyState from '../bey/state';
import { Subscribe } from 'bey';

class App extends Component {
  render() {
    return (
      <Subscribe to={beyState} on={state => state.menuToggle}>
        {menuToggle => (
          <div>
            <span>{menuToggle ? 'true' : 'false'}</span>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default App;
