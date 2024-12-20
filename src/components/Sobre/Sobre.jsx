import minhaFoto from '../../assets/Images/foto-pessoal.jpg';
import './SobreStyles.scss';

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container-card">
        <div className="card-sobre">
          <div className="front-content">
            <img src={minhaFoto} alt="foto de perfil" />
          </div>
          <div className="content">
            <p className="heading">Sobre mim</p>
            <p>
              Venho de uma carreira na área de logística, onde atuei como
              conferente e posteriormente como encarregado geral. Nessas
              posições, desenvolvi habilidades essenciais como análise crítica,
              pensamento estratégico e a capacidade de encontrar soluções
              rápidas para problemas. Hoje, aplico essas competências na minha
              jornada como desenvolvedor web frontend. Com uma base sólida em
              HTML, CSS, Sass, Styled-components, JavaScript, React e Vue.js, e
              atualmente aprofundando meus conhecimentos em TypeScript e
              Angular, estou sempre pronto para aprender e enfrentar novos
              desafios. Estou cursando Análise e Desenvolvimento de Sistemas e
              Engenharia de Software, buscando continuamente melhorar minhas
              habilidades e contribuir efetivamente para projetos inovadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
