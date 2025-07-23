import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';
import { useState } from 'react';

function Navbar({ darkMode, toggleTheme }) {
  const logo = darkMode ? logoLight : logoDark;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
      </div>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <ul className={`${styles.navList} ${menuOpen ? styles.show : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/portfolio">Portfólio</Link></li>
      </ul>

      <div className={styles.rightSection}>
        <button className={styles.themeButton} onClick={toggleTheme}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
