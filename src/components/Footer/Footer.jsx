import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Data from '../../Const';
import './FooterStyles.scss';
import { MdOutlineEmail } from 'react-icons/md';

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
      <div className="contacts">
              <a
                href={Data.WhatsappLink}
                rel="noreferrer"
                target="_blank"
                title="Whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={Data.LinkedinLink}
                rel="noreferrer"
                target="_blank"
                title="Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href={Data.GitHubLink}
                rel="noreferrer"
                target="_blank"
                title="Github"
              >
                <FaGithub />
              </a>
              <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail">
                <MdOutlineEmail />
              </a>
            </div>
    </footer>
  );
}
