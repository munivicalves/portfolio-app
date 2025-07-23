import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Portfolio.module.css';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Usa variável de ambiente com fallback para localhost
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    axios.get(`${API_URL}/projects`)
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar projetos:', error);
        setLoading(false);
      });
  }, [API_URL]);

  return (
    <div className={styles.container}>
      <h1>Portfólio</h1>
      {loading ? <p>Carregando...</p> : (
        <div className={styles.projectGrid}>
          {projects.map(project => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
