import React from 'react';

export default (props) => (
  <a className={props.className} href={props.href}>
    {props.children}
  </a>
);
