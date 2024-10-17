
import './Header.css';

const Header = () => {
    return (
        <header className="Home">
            <img src="/images/logo.png" alt="Logo"/>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Sobre">Sobre</a></li>
                <li><a href="#Projetos">Projetos</a></li>
                <li><a href="#Contatos">Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;