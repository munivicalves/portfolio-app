import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarRing}>
        <img src="/assets/perfil.png" alt="Munique Victória" className={styles.profileImage} />
      </div>
      <h2 className={styles.name}>Munique Victória</h2>
      <h3 className={styles.role}>Desenvolvedora em Formação</h3>
      <p>
        Desenvolvedora em formação com background em finanças e paixão por tecnologia.
        Meu foco é criar soluções digitais que otimizem processos e agreguem valor real ao usuário.
        Dedicada a explorar o mundo da tecnologia, atuando de ponta a ponta no ciclo de vida de uma aplicação.
      </p>
      <p>
        Atualmente cursando <strong>Sistemas de Informação</strong> pela Universidade de Uberaba (Uniube).
      </p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/munivicalves" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/munique-alves" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
