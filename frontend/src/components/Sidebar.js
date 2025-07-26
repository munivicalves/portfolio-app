import styles from '../styles/Sidebar.module.css';

function Sidebar({ theme }) {
  return (
    <aside className={`${styles.sidebar} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <img src="/assets/perfil.png" alt="Profile" className={styles.profileImage} />
      <h2>Munique Victória</h2>
      <h3>Desenvolvedora em Formação</h3>
      <p>
        Desenvolvedora em formação com background em finanças e paixão por tecnologia.  
        Meu foco é criar soluções digitais que otimizem processos e agreguem valor real ao usuário.  
        Dedicada a explorar o mundo da tecnologia, atuando de ponta a ponta no ciclo de vida de uma aplicação.
      </p>
      <p>
        Atualmente cursando <strong>Sistemas de Informação</strong> pela Universidade de Uberaba (Uniube).
      </p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/munivicalves" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/munique-alves" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </aside>
  );
}

export default Sidebar;