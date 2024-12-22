import './FooterStyles.scss';

export default function Footer() {
  const comeco = 'Desenvolvido por ';
  const frase = '<FelipeMascena />';

  return (
    <footer className="footer-container">
      <div className="footer-frase">
        <p>
          {comeco}
          <span>{frase}</span>
        </p>
      </div>
    </footer>
  );
}
