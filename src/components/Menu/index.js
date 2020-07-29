import React from 'react'
import Logo from '../../assets/img/logo.png'
import './Menu.css'
import Button from '../Button'

export default () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo FakeFlix" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}