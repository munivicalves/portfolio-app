import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Portfolio.module.css';
import ProjectCard from '../components/ProjectCard';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/projects')
      .then(response => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar projetos:', error);
        setLoading(false);
      });
  }, []);

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