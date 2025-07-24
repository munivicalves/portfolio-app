import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Portfolio.module.css';
import ProjectCard from '../components/ProjectCard';

// Define a URL da API fora do componente (melhor performance e clareza)
const API_URL = process.env.REACT_APP_API_URL;

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, []); // Sem dependências, pois API_URL é constante

  return (
    <div className={styles.container}>
      <h1>Portfólio</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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
