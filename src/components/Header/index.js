// Colocar o menu hamburguer e a imagem

import './Header.css';
import React, { useState } from 'react';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <header className="header">


            <div className='header-logo'>
                <img src="/Images/logo.png" alt="Logo"/>
            </div>

            <div>
                <button className="hamburger" onClick={toggleMenu}>
                    <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/menu.png" alt="menu"/>
                </button>
            </div>

            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contatos">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;