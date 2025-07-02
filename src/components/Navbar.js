import React from 'react';
import './Navbar.css';
// arquivos png
import Youtube from '../assets/YT.png';

export default function Navbar() {
  return (

    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={Youtube} alt="YouTube" id= "LogoYoutube"/>
        </div>
      </div>
      <div className="navbar-center">
        <div className="search-bar">
          <input type="text" placeholder="Pesquisar" />
          <button className="keyboard-icon">⌨</button>
          <button className="search-icon">🔍</button>
        </div>
        <button className="mic-icon">🎤</button>
      </div>
      <div className="navbar-right">
        <button className="create-btn">＋ Criar</button>
        <div className="notifications">
          🔔<span className="badge">9+</span>
        </div>
        <div className="avatar">E</div>
      </div>
    </nav>
  );
}
