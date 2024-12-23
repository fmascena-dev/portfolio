import './HomeStyles.scss';
import foto from '../../assets/Images/foto-pessoal.jpg';

export default function Home() {
  return (
    <main id="home">
      <section>
        <div>
          <h2>Olá, eu sou</h2>
          <h1>&lt;FelipeMascena /&gt;</h1>
          <p>
            Sou <span>desenvolvedor web frontend</span> com sólida experiência
            em HTML, CSS, Sass, Styled-components, JavaScript, React e Vue.js.
            Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e
            Engenharia de Software. Estou sempre em busca de aprendizado, com
            foco em aprimorar minhas habilidades e conhecimentos. Atualmente,
            estudo TypeScript e Angular, além de me aprofundar cada vez mais em
            React.
          </p>
        </div>
      </section>
      <figure>
        <img src={foto} alt="foto de perfil" />
      </figure>
    </main>
  );
}
