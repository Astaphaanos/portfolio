import AnimatedOnScroll from '../AnimetedOnScroll';
import TypingEffect from '../TypingEffect';
import './Home.css';

const Home = () => {
    return (
        <section className='home'> 

            <AnimatedOnScroll animation="zoom-in-right">
                <div className="home-info">
                    <h1>Clara Amorim</h1>
                    <TypingEffect/>
                </div>

                <div className='btn-container'>
                    <div className='efeito'>
                        <button className='btn-home'>
                            <a href="#projetos">Projetos</a>
                        </button>
                    </div>
                </div>
            </AnimatedOnScroll>
        </section>
    );
}

export default Home;