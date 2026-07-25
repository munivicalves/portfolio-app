import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Portfolio.module.css';
import ProjectCard from '../components/ProjectCard';
import { API_URL } from '../config/api';

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao buscar projetos:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.eyebrow}>Meu trabalho</span>
      <h1>Portfólio</h1>

      {loading ? (
        <p className={styles.status}>Carregando projetos...</p>
      ) : projects.length === 0 ? (
        <p className={styles.status}>Nenhum projeto encontrado no momento.</p>
      ) : (
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              imageUrls={project.imageUrls}
              githubUrl={project.githubUrl}
              deployUrl={project.deployUrl}
              techs={project.techs}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
