import React, { Component, Fragment } from 'react';
import classnames from 'classnames';

import { Backdrop } from '../';

class Menu extends Component {
  state = {
    toggle: false
  };

  toggleHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <Fragment>
        <Backdrop toggle={this.state.toggle} />
        <div className="menu" onClick={this.toggleHandler}>
          <hr
            className={classnames('menu__icon', {
              'toggle-one': this.state.toggle
            })}
          />
          <hr
            className={classnames('menu__icon', {
              'toggle-two': this.state.toggle
            })}
          />
          <hr
            className={classnames('menu__icon', {
              'toggle-three': this.state.toggle
            })}
          />
        </div>
      </Fragment>
    );
  }
}

export default Menu;
