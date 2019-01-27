import React from 'react';

import classnames from 'classnames';

import beyState from '../../../bey/state';
import * as actions from '../../../bey/actions';
import { Subscribe } from 'bey';

const Menu = () => {
  const menuToggleHandler = () => {
    actions.menuToggleHandler(beyState);
  };
  return (
    <Subscribe to={beyState} on={state => state.menuToggle}>
      {menuToggle => (
        <div className="menu" onClick={menuToggleHandler}>
          <span className={classnames('menu__line', { line1: menuToggle })} />
          <span className={classnames('menu__line', { line2: menuToggle })} />
          <span className={classnames('menu__line', { line3: menuToggle })} />
        </div>
      )}
    </Subscribe>
  );
};

export default React.memo(Menu);
