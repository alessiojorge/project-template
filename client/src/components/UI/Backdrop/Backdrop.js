import React from 'react';
import classnames from 'classnames';

import Link from './Link/Link';

const backdrop = props => {
  return (
    <div className={classnames('backdrop', { 'backdrop-show': props.toggle })}>
      <div className="backdrop__container">
        <Link href="#" title="header" />
        <Link href="#" title="content" />
        <Link href="#" title="footer" />
      </div>
    </div>
  );
};

export default backdrop;
