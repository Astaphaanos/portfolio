import AnimatedOnScroll from '../AnimetedOnScroll';
import './Sobre.css';

const Sobre = () => {
    return (
        <section className="sobre">
            <AnimatedOnScroll animation="fade-up">
                <div className="sobre-container">
                    <div className="sobre-info">
                        <h2>Sobre mim</h2>
                        <p>Nem sempre eu achei que programar seria algo para mim — até descobrir que escrever código é, de certa forma, uma maneira de dar forma às ideias. Hoje sou desenvolvedora Full Stack e gosto de transformar lógica em experiência: do HTML e CSS que constroem a base, ao JavaScript, React, Node.js e bancos de dados que fazem tudo ganhar vida. Gosto do desafio de conectar o visual e o funcional, criando projetos que contam histórias, resolvem problemas e mostram o quanto a tecnologia pode ser humana. </p>
                        <a href="#Contatos">Contate-me</a>
                    </div>
                </div>     
            </AnimatedOnScroll>  
        </section>
    );
}

export default Sobre