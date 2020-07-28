import React from 'react'

export default props => {
  return (
    <a className={props.className} href={props.href}>
        {props.children}
    </a>
  );
}