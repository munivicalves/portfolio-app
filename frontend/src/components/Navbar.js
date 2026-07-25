import { NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import styles from '../styles/Navbar.module.css';
import { useState } from 'react';

function Navbar({ darkMode, toggleTheme }) {
  const logo = darkMode ? '/assets/logo-light.png' : '/assets/logo-dark.png';
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <NavLink to="/" className={styles.logoLink} onClick={closeMenu}>
          <img src={logo} alt="Munique Alves" className={styles.logo} />
        </NavLink>
      </div>

      <button
        className={styles.menuToggle}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? styles.active : '')} onClick={closeMenu}>
            Portfólio
          </NavLink>
        </li>
      </ul>

      <div className={styles.rightSection}>
        <button
          className={styles.themeButton}
          onClick={toggleTheme}
          aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
