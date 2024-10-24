import AnimatedOnScroll from '../AnimetedOnScroll';
import "./Projetos.css";

const Projetos = () => {
  return (
    <section className="projetos" id="projetos">
       <AnimatedOnScroll animation="fade-up">
        <h2>Projetos</h2>

        <div className="card">

            <div className="card-info">
              <div className="projeto-image">
                <img src="/images/sites/devload.png" alt="devload" />
              </div>
              <div className="projeto-info">
                <h3>Devload</h3>
                <p>
                  O Devload é um site que reúne uma seleção de aplicativos populares
                  usados por desenvolvedores, permitindo que os usuários explorem e
                  baixem diretamente as ferramentas.
                </p>
                <span>HTML, SCSS, JavaScript</span>
                <div className="btn-projetos">
                  <button>
                    <a href="https://devload.vercel.app/" target="-blank">
                      <img src="images/new.png" alt="New ico"/>
                    </a>
                  </button>
                  <button>
                    <a href="https://github.com/Astaphaanos/Devload" target="-blank">
                      <img src="images/github-ico.png" alt="Github ico"/>
                    </a>
                  </button>
                </div>
              </div>
            

            <div className="card-info">
              <div className="projeto-image">
                <img src="/images/sites/todovue.png" alt="devload" />
              </div>
              <div className="projeto-info">
                <h3>To-do</h3>
                <p>
                  O Todo Vue é um aplicativo simples de lista de tarefas
                  desenvolvido com Vue.js, permitindo que os usuários adicionem,
                  visualizem e gerenciem suas tarefas de forma prática e intuitiva.
                </p>
                <span>HTML, Vue, JavaScript</span>
                <div className="btn-projetos">
                  <button>
                    <a
                      href="https://todo-vue-indol-one.vercel.app/"
                      target="-blank"
                    >
                      <img src="images/new.png" alt="New ico"/>
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/Astaphaanos/todo-vue"
                      target="-blank"
                    >
                      <img src="images/github-ico.png" alt="Github ico"/>
                      
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-info">
            <div className="projeto-image">
              <img src="/images/sites/cafe.png" alt="devload" />
            </div>
            <div className="projeto-info">
              <h3>Patisserie du Cafe</h3>
              <p>
                O Patisserie du Café é um site de confeitaria que apresenta produtos
                de uma patisserie, destacando itens como doces e bebidas. O design
                elegante permite aos usuários explorar o menu e aprender mais sobre
                as delícias oferecidas, criando uma experiência envolvente.
              </p>
              <span>HTML, Bootstrap, CSS</span>
              <div className="btn-projetos">
                <button>
                  <a href="https://patisserie-du-cafe.vercel.app/" target="-blank">
                    <img src="images/new.png" alt="New ico"/>
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Astaphaanos/Patisserie-du-cafe"
                    target="-blank"
                  >
                    <img src="images/github-ico.png" alt="Github ico"/>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="card-info">
            <div className="projeto-image">
              <img src="/images/sites/carrinho.png" alt="devload" />
            </div>
            <div className="projeto-info">
              <h3>Carrinho de Compras</h3>
              <p>
                O Carrinho de Compras é um site de e-commerce onde os usuários podem
                adicionar produtos ao carrinho, visualizar os itens selecionados e
                gerenciar suas compras de forma fácil e eficiente.
              </p>
              <span>HTML, CSS, JavaScript</span>
              <div className="btn-projetos">
                <button>
                  <a
                    href="https://carrinho-de-compras-peach.vercel.app/"
                    target="-blank"
                  >
                    <img src="images/new.png" alt="New ico"/>
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Astaphaanos/Carrinho-de-Compras"
                    target="-blank"
                  >
                    <img src="images/github-ico.png" alt="Github ico"/>
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div className="card-info">
            <div className="projeto-image">
              <img src="/images/sites/loginpage.png" alt="devload" />
            </div>
            <div className="projeto-info">
              <h3>Login Page Nine Omega</h3>
              <p>
                A Login Page Nine Omega é uma página de login minimalista e
                funcional, projetada para permitir que os usuários façam login de
                forma simples e segura. O design limpo e responsivo garante uma boa
                experiência em diferentes dispositivos.
              </p>
              <span>HTML, CSS</span>
              <div className="btn-projetos">
                <button>
                  <a
                    href="https://login-page-nine-omega.vercel.app/"
                    target="-blank"
                  >
                    <img src="images/new.png" alt="New ico"/>
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Astaphaanos/login-page"
                    target="-blank"
                  >
                    <img src="images/github-ico.png" alt="Github ico"/>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedOnScroll>
    </section>
  );
};

export default Projetos;
