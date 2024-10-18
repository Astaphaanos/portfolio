import './Sobre.css';

const Sobre = () => {
    return (
        <section className="sobre" id='sobre'>
            <div className="sobre-container">
                <div className="sobre-info">
                    <h2>Sobre mim</h2>
                    <p>Sou desenvolvedora front-end apaixonada por tecnologia com conhecimento em HTML, CSS e JS e frameworks como React. Minha abordagem combina estética e funcionalidade, permitindo que eu desenvolva interfaces que não apenas sejam visualmente atraentes, mas também ofereçam uma navegação fluida e eficiente.  </p>
                    <a href="#Contatos">Contate-me</a>
                </div>
                <div className="sobre-image"> 
                    <img src="Images/connecting.png" alt="Engrenagem"/>
                </div>
            </div>       
        </section>
    );
}

export default Sobre