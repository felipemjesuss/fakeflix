import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

export default () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="Logo FakeFlix" />
    </Link>
    <div className="DivButtons">
      <Button as={Link} className="ButtonLink mr-5" to="/cadastro/categoria">
        Nova categoria
      </Button>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </div>
  </nav>
);
