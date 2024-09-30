import './Sobre.css';

const Sobre = () => {
    return (
        <section className='Sobre'>
            <div className="card">
                <div className="card-sobre">
                    <img src="/images/about-me.png" alt="Sobre mim" />
                </div>
                <div className="card-info">
                    <h2>Sobre mim</h2>
                    <p>Sou desenvolvedora front-end apaixonada por tecnologia com conhecimento em HTML, CSS e JS e frameworks como React. Minha abordagem combina estética e funcionalidade, permitindo que eu desenvolva interfaces que não apenas sejam visualmente atraentes, mas também ofereçam uma navegação fluida e eficiente.  </p>
                </div>
            </div>
        </section>
    );
}

export default Sobre