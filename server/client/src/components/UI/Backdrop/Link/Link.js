import React from 'react';

const link = props => {
  return (
    <a href={props.href} className="link">
      <h3 className="link__title">{props.title}</h3>
    </a>
  );
};

export default link;
