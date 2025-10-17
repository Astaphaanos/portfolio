import { useState } from "react";
import AnimatedOnScroll from "../AnimetedOnScroll";
import "./Projetos.css";

const projetos = [

  {
    image: '/Images/sites/Barber.png',
    nome: 'Agendamento para Barbearia',
    description: 'O BarberSiteAgendamento é um sistema web full-stack desenvolvido para gerenciar o processo de agendamentos em uma barbearia. Ele integra front-end e back-end, permitindo que clientes marquem horários e que administradores gerenciem esses agendamentos por meio de uma interface própria.',
    tecnologias: 'HTML, CSS, JavaScript, Node.js, Express, Sequelize, MySQL', 
    github: "https://github.com/Astaphaanos/BarberSiteAgendamento",
    site: 'https://www.linkedin.com/feed/update/urn:li:activity:7381825958766346240/',
  },

  {
    image: '/Images/sites/revriders.png',
    nome: 'Rev Riders Moto',
    description: 'O Rev Riders Moto é um site moderno e responsivo desenvolvido para entusiastas de motocicletas, apresentando uma coleção de motos com designs e especificações técnicas. Desenvolvido em React e estilizado com CSS puro, o projeto utiliza componentes reutilizáveis e layouts flexíveis para garantir uma experiência de usuário fluida e atraente em diferentes dispositivos.',
    tecnologias: 'React, CSS', 
    github: "https://github.com/Astaphaanos/rev-riders-moto",
    site: 'https://rev-riders-moto.vercel.app/',
  },

  {
    image: '/Images/sites/busfacul.png',
    nome: 'Sistema de Cadastro de Alunos para Transporte Escolar',
    description: 'O BusFacul é uma aplicação back-end desenvolvida para gerenciar o cadastro de alunos que utilizam o transporte escolar. O sistema permite que administradores registrem, visualizem e organizem informações dos alunos, facilitando a gestão logística do transporte.',
    tecnologias: 'Handlebars, Node.js, Express, Sequelize, MySQL', 
    github: "https://github.com/Astaphaanos/BusFacul",
    site: 'https://www.linkedin.com/feed/update/urn:li:activity:7366095722695245824/',
  },

  {
    image: '/Images/sites/laddingPage.png',
    nome: 'Landing Page para Psicóloga — Site Profissional para Atendimento Terapêutico',
    description: 'É uma aplicação web desenvolvida para apresentar de forma clara e profissional os serviços de uma psicóloga. O site visa facilitar o contato com potenciais clientes, destacando áreas de atuação, informações sobre a profissional e formas de agendamento.',
    tecnologias: 'React, Tailwind CSS', 
    github: "https://github.com/Astaphaanos/ladding-page-psicologa",
    site: 'https://thayse-psicologa-site.vercel.app/',
  },

  {
    image: '/Images/sites/loginpage.png',
    nome: 'Login Page',
    description: 'Um projeto de página de login desenvolvido em React, com uma interface intuitiva e moderna para autenticação de usuários. A aplicação permite a navegação entre as páginas de login e cadastro, com botões específicos para alternar entre as telas.',
    tecnologias: 'React, CSS', 
    github: "https://github.com/Astaphaanos/login-page-react",
    site: 'https://login-page-react-anna-clara-amorims-projects.vercel.app/',
  },

  {
    image: '/Images/sites/GeradorSenha.png',
    nome: 'Gerador de Senha',
    description: 'O Gerador de Senha é uma aplicação web simples e funcional desenvolvida para criar senhas aleatórias com base em critérios definidos pelo usuário. A ferramenta permite gerar senhas seguras, atendendo às necessidades de segurança em diversos contextos',
    tecnologias: 'HTML, CSS, JavaScript', 
    github: "https://github.com/Astaphaanos/gerador-senha",
    site: 'https://gerador-senha-kappa-dun.vercel.app/',
  },

  {
    image: '/Images/sites/cafe.png',
    nome: 'Patisserie Du Cafe',
    description: 'O Patisserie du Café é um site de confeitaria que apresenta produtos de uma patisserie, destacando itens como doces e bebidas. O design elegante permite aos usuários explorar o menu criando uma experiência envolvente.',
    tecnologias: 'HTML, BootStrap', 
    github: "https://github.com/Astaphaanos/Patisserie-du-cafe",
    site: 'https://patisserie-du-cafe.vercel.app/',
  },


  {
    image: '/Images/sites/abc-divertido.png',
    nome: 'ABC Divertido',
    description: 'O ABC Divertido é um site educativo e interativo desenvolvido para crianças, com o objetivo de transformar o tempo gasto em dispositivos móveis em uma experiência de aprendizado divertida e produtiva. Criado inicialmente para o meu primo, mas depois expandindo para a faixa etária entre 2 e 4 anos, o projeto utiliza React para a estruturação dos componentes e CSS para um design lúdico e atraente.',
    tecnologias: 'React, CSS', 
    github: "https://github.com/Astaphaanos/ABC-divertido",
    site: 'https://abc-divertido.vercel.app/',
  },
]

const Projetos = () => {
  const [mostrarMais, setMostrarMais] = useState('')

  const projetosIniciais = 2;
  const projetosVisiveis = mostrarMais ? projetos : projetos.slice(0, projetosIniciais);

  return (
  <section className="projetos">
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
