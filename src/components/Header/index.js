
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <img src="/images/logo.png" alt="Logo"/>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contatos">Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;