import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaAws,  FaCogs, FaDesktop, FaLinkedin, FaJava, FaCloud } from 'react-icons/fa';

import { SiMongodb, SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'; // caminho do antigo CSS


export default function Home({ darkMode }) {
  const [projects, setProjects] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
  useEffect(() => {
    axios.get(`${API_URL}/projects`)
      .then(response => {
        const latestProjects = response.data.slice(-2).reverse();
        setProjects(latestProjects);
      })
      .catch(error => {
        console.error('Erro ao buscar projetos:', error);
      });
  }, []);

  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
    >
      <h1 className={styles.title}>Bem-vindo ao Meu Portfólio</h1>
      <p className={styles.subtitle}>
        Explore meus projetos, serviços e conheça mais sobre mim!
      </p>

      <section className={styles.skillsetSection}>
        <h2 className={styles.skillsetTitle}>Skillset</h2>
        <div className={styles.skillCarousel}>
        <div className={styles.skillScroll}>
          <div className={styles.skillCard}><FaReact /><span>React</span></div>
          <div className={styles.skillCard}><FaNodeJs /><span>Node.js</span></div>
          <div className={styles.skillCard}><FaDatabase /><span>MongoDB</span></div>
          <div className={styles.skillCard}><FaGithub /><span>GitHub</span></div>
          <div className={styles.skillCard}><FaHtml5 /><span>HTML5</span></div>
          <div className={styles.skillCard}><FaCss3Alt /><span>CSS3</span></div>
          <div className={styles.skillCard}><FaJsSquare /><span>JavaScript</span></div>
          <div className={styles.skillCard}><FaDatabase /><span>MySQL</span></div>
          <div className={styles.skillCard}><FaDatabase /><span>SQL Server</span></div>
          <div className={styles.skillCard}><FaJava /><span>Java</span></div>
          <div className={styles.skillCard}><FaCogs /><span>Spring Boot</span></div>
          <div className={styles.skillCard}><FaAws /><span>AWS</span></div>
          <div className={styles.skillCard}><FaCogs /><span>Maven</span></div>
          <div className={styles.skillCard}><FaDesktop /><span>Java Swing</span></div>
        </div>
        </div>

        <div className={styles.tags}>
          <span>autonomia</span>
          <span>visão 360º</span>
          <span>flexibilidade</span>
          <span>tech fluency</span>
        </div>
      </section>

          <section className={styles.projects}>
      <h2>Últimos Projetos</h2>
      <div className={styles["project-carousel"]}>
        {projects.map((project) => (
          <div className={styles["project-card"]} key={project._id}>
            <h3>{project.title}</h3>
            <img
              src={require(`../assets/${project.imageUrls[0]}`)}
              alt={project.title}
              className={styles["project-img"]}
            />
            <p>{project.description}</p>
            <p><strong>Tecnologias:</strong> {project.techs.join(', ')}</p>
            <Link to="/portfolio">Ver mais</Link>
          </div>
        ))}
      </div>
    </section>


      <section className={styles.certifications}>
        <h2>Certificações</h2>
        <ul>
          <li>Minicurso de Análise de Dados - Cubo Academy</li>
          <li>Segurança da Informação - Unimoura</li>
          <li>Fundamentos de Gestão de Projetos - Unimoura</li>
          <li>Versionamento de Código com Git e GitHub - DIO</li>
        </ul>
      </section>

      <section className={styles.testimonials}>
        <h2>Pensando além do código</h2>
        <blockquote>
          "Para mim, tecnologia é sobre resolver problemas de forma criativa, construindo soluções que fazem a diferença."
          <footer>– Munique Alves</footer>
        </blockquote>
      </section>

      <section className={styles.cta}>
        <h2>Vamos construir algo incrível juntos?</h2>
        <p> Entre em contato comigo através do e-mail: munivicalves@gmail.com</p>
        <Link to="/about" className={styles["cta-button"]}>Saiba mais sobre mim</Link>
        <div className={styles.socialLinks}>
          <a href="https://github.com/munivicalves" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/munique-alves" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

      </section>
    </div>
  );
}
