
import TypingEffect from '../TypingEffect';
import './Home.css';

const Home = () => {
    return (
        <section className='home'> 

            <div className="home-info">
                <h1>Clara Amorim</h1>
                <TypingEffect/>
            </div>

            <div className='btn-container'>
                <div className='efeito'>
                    <button className='btn-home'>
                        <svg width="180px" height="60px" viewBox="0 0 180 60" class="border"> <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" /> <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" /> </svg>
                        <span>
                            <a href="#Projetos">Projetos</a>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;