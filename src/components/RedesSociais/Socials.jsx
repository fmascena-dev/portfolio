import './SocialsStyles.scss'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Data from "../../Const";

export default function Socials() {
    return (
      <section>
        <div className="FixedContacts">
          <div className="container">
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
          </div>
        </div>
      </section>
    );
}