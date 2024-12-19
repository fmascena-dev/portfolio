import { FaCss3, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiSass, SiStyledcomponents } from 'react-icons/si';
import './TecnologiasStyle.scss';

export default function Tecnologias() {
  return (
    <main id="tecnologias">
      <section className="section-cards">
        <div className="cards">
          <FaHtml5 />
          <h2>HTML</h2>
          <p className='paragrafo'>
            Linguagem de marcação utilizada para estruturar e apresentar
            conteúdo na web.
          </p>
        </div>
        <div className="cards">
          <FaCss3 />
          <h2>CSS</h2>
          <p className='paragrafo'>
            Linguagem de estilo utilizada para estilizar os elementos da web.
          </p>
        </div>
        <div className="cards">
          <SiSass />
          <h2>SCSS</h2>
          <p className='paragrafo'>
            Framework CSS que permite a criação de estilos reutilizáveis e
            escaláveis.
          </p>
        </div>
        <div className="cards">
          <SiStyledcomponents />
          <h2>Styled-Components</h2>
          <p className='paragrafo'>
            Framework CSS que permite a criação de componentes reutilizáveis e
            escaláveis com a facilidade de estilizar componentes com Styled
            Components.
          </p>
        </div>
        <div className="cards">
          <IoLogoJavascript />
          <h2>JavaScript</h2>
          <p className='paragrafo'>
            Linguagem de programação que permite a criação de interatividade e
            funcionalidades em páginas web.
          </p>
        </div>
        <div className="cards">
          <FaReact />
          <h2>React</h2>
          <p className='paragrafo'>
            Biblioteca JavaScript criado pelo Facebook para a criação de
            interfaces reativas.
          </p>
        </div>
        <div className="cards">
          <FaVuejs />
          <h2>Vue.js</h2>
          <p className='paragrafo'>
            Framework JavaScript criado pelo Vue.js para a criação de interfaces
            reativas.
          </p>
        </div>
      </section>
    </main>
  );
}
