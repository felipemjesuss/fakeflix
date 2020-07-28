import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import ButtonLink from './components/ButtonLink'

export default () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo FakeFlix" />
      </a>
      <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}