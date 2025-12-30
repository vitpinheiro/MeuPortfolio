import React, { useState } from 'react';
import './header.css';

interface HeaderProps {
  setActiveSection: React.Dispatch<React.SetStateAction<'about' | 'projects' | 'contact'>>;
}

const Header: React.FC<HeaderProps> = ({ setActiveSection }) => {
  const [showInfo, setShowInfo] = useState(false);

  const handleProfileClick = () => {
    setShowInfo(!showInfo); // alterna entre mostrar e esconder
  };

  return (
    <header>
      <div className="profile-container">
        <div className="profile-pic" onClick={handleProfileClick}>
          <img src="/minhafoto.jpg" alt="Vitória Pinheiro" />
        </div>
        {showInfo && (
          <div className="profile-info">
            <p>19 anos</p>
            <p>Técnica em Informática para Internet</p>
            <p>Desenvolvedora Web</p>
          </div>
        )}
      </div>

      <h1>Vitória Pinheiro</h1>
      <nav>
        {/* Mantendo a aparência de links, mas controlando a seção */}
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}>Sobre</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projetos</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('contact'); }}>Contato</a>
      </nav>
    </header>
  );
};

export default Header;
