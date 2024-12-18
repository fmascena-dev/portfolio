import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <figure>
        <img src="/minha-logo.png" alt="minha logo" className={styles.logo} />
      </figure>
      <button
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={handleMenuToggle}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
        <ul className={styles.navUl}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span className={styles.box}>Início</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span className={styles.box}>Tecnologias</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span className={styles.box}>Projetos</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span className={styles.box}>Contato</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              <span className={styles.box}>Sobre mim</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
