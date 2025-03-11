import Header from './components/Header';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';
import Contatos from './components/Contatos';
import Footer from './components/Footer';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className='App' style={{backgroundColor: '#0d1321'}}>
        <Header/>
        <Home/>
        <Sobre/>
        <Tecnologias/>
        <Projetos/>
        <Contatos/>
        <Footer/>
        <SideMenu/>
    </div>
  )
}

export default App;
