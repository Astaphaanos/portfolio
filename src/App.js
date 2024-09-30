
import './App.css';
import Home from './components/Home';
import Introducao from './components/Introducao';
import Sobre from './components/Sobre';
import Tecnologias from './components/Tecnologias';
import Projetos from './components/Projetos';


function App() {
  return (
    <div className='App' style={{backgroundColor: '#202023'}}>
        <Home/>
        <Introducao/>
        <Sobre/>
        <Tecnologias/>
        <Projetos/>
    </div>
  )
}

export default App;
