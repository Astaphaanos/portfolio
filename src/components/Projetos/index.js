import { useState } from "react";
import AnimatedOnScroll from "../AnimetedOnScroll";
import "./Projetos.css";

const projetos = [
  {
    image: '/images/sites/devload.png',
    nome: 'Devload',
    description: 'O Devload é um site que reúne uma seleção de aplicativos populares usados por desenvolvedores, permitindo que os usuários explorem e baixem diretamente as ferramentas.',
    tecnologias: 'HTML, SCSS, JavaScript', 
    github: "https://github.com/Astaphaanos/Devload",
    site: 'https://devload.vercel.app',
  },

  {
    image: '/images/sites/todovue.png',
    nome: 'To-Do',
    description: 'O Todo Vue é um aplicativo simples de lista de tarefas desenvolvido com Vue.js, permitindo que os usuários adicionem, visualizem e gerenciem suas tarefas de forma prática e intuitiva.',
    tecnologias: 'Vue.js', 
    github: "https://github.com/Astaphaanos/todo-vue",
    site: 'https://todo-vue-indol-one.vercel.app/',
  },

  {
    image: '/images/sites/cafe.png',
    nome: 'Patisserie Du Cafe',
    description: 'O Patisserie du Café é um site de confeitaria que apresenta produtos de uma patisserie, destacando itens como doces e bebidas. O design elegante permite aos usuários explorar o menu criando uma experiência envolvente.',
    tecnologias: 'HTML, BootStrap', 
    github: "https://github.com/Astaphaanos/Patisserie-du-cafe",
    site: 'https://patisserie-du-cafe.vercel.app/',
  },

  {
    image: '/images/sites/loginpage.png',
    nome: 'Login Page',
    description: 'Um projeto de página de login desenvolvido em React, com uma interface intuitiva e moderna para autenticação de usuários. A aplicação permite a navegação entre as páginas de login e cadastro, com botões específicos para alternar entre as telas.',
    tecnologias: 'React e CSS', 
    github: "https://github.com/Astaphaanos/login-page-react",
    site: 'https://login-page-react-anna-clara-amorims-projects.vercel.app/',
  },

  {
    image: '/images/sites/revriders.png',
    nome: 'Rev Riders Moto',
    description: 'O Rev Riders Moto é um site moderno e responsivo desenvolvido para entusiastas de motocicletas, apresentando uma coleção de motos com designs e especificações técnicas. Desenvolvido em React e estilizado com CSS puro, o projeto utiliza componentes reutilizáveis e layouts flexíveis para garantir uma experiência de usuário fluida e atraente em diferentes dispositivos.',
    tecnologias: 'React e CSS', 
    github: "https://github.com/Astaphaanos/rev-riders-moto",
    site: 'https://rev-riders-moto.vercel.app/',
  },

  {
    image: '/images/sites/abc-divertido.png',
    nome: 'ABC Divertido',
    description: 'O ABC Divertido é um site educativo e interativo desenvolvido para crianças, com o objetivo de transformar o tempo gasto em dispositivos móveis em uma experiência de aprendizado divertida e produtiva. Criado inicialmente para o meu primo, mas depois expandindo para a faixa etária entre 2 e 4 anos, o projeto utiliza React para a estruturação dos componentes e CSS para um design lúdico e atraente.',
    tecnologias: 'React e CSS', 
    github: "https://github.com/Astaphaanos/ABC-divertido",
    site: 'https://abc-divertido.vercel.app/',
  },
]

const Projetos = () => {
  const [mostrarMais, setMostrarMais] = useState('')

  const projetosIniciais = 2;
  const projetosVisiveis = mostrarMais ? projetos : projetos.slice(0, projetosIniciais);

  return (
  <section className="projetos" id="projetos">
  <AnimatedOnScroll animation="fade-up">
    <h2>Projetos</h2>
    <div className="projetos-container">
      {projetosVisiveis.map((projetos, index) => (
      
      <div className="card" key={index}>
      
        <div className="card-info">
          <div className="projeto-image">
            <img src={projetos.image} alt={projetos.image} />
          </div>
          <div className="projeto-info">
            <h3>{projetos.nome}</h3>
            <p>{projetos.description}</p>
            <span>{projetos.tecnologias}</span>
            <div className="btn-projetos">
              <button>
                <a href={projetos.site} target="-blank">
                  <img src="/Images/new.png" alt="New ico"/>
                </a>
              </button>
              <button>
                <a href={projetos.github} target="-blank">
                  <img src="/Images/github-ico.png" alt="Github ico"/>
                </a>
              </button>
            </div>
          </div>
      
        </div>
      </div>
      ))}
    </div>

    {projetos.length > projetosIniciais && (
       <div className="mostrar-mais-container">
       <div className="efeito-blur"></div>
       <button
         className="mostrar-mais-btn"
         onClick={() => setMostrarMais(!mostrarMais)}
       >
         {mostrarMais ? 'Mostrar menos' : 'Mostrar mais'}
       </button>
     </div>
    )}
  </AnimatedOnScroll>
</section>
  );
};

export default Projetos;
