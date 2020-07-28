import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'

export default () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo FakeFlix" />
      </a>
    </nav>
  );
}