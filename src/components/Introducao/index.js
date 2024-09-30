
import './Introducao.css';

const Introducao = () => {
    return (

        <section className='introducao'> 

            <div className="info">
                <span>Olá, meu nome é</span>
                <h1 className="gradient-text">Clara Amorim</h1>
                <h2>[ Desenvolvedora Front-End ]</h2>
                <button className='glow-hover'><a href="#Projetos">Projetos</a></button>
            </div>

            <div className="imagem-personagem">
                <img src="/images/personagem.png" alt="personagem" />
            </div>
        </section>
    );
}

//colocar uma imagem
export default Introducao;