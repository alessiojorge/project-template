import React from 'react';

import { Menu, Logo } from '../UI';

const navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__sections" />
      <div className="navigation__sections">
        <Logo />
      </div>
      <div className="navigation__sections">
        <Menu />
      </div>
    </div>
  );
};

export default navigation;
