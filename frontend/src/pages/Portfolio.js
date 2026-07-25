import { useEffect, useState } from "react";

import { getProjects } from "../services/projectService";

import ProjectCard from "../components/project/ProjectCard";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="page-container py-20 text-center">
        Carregando projetos...
      </div>
    );
  }

  return (
    <div className="page-container pt-0">

      <section className="section">

        <h1 className="section-title">
          Portfólio
        </h1>

        <p className="section-subtitle">
          Alguns dos projetos que desenvolvi.
        </p>

        <div
          className="
            grid
            gap-8

            md:grid-cols-2

            xl:grid-cols-2
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Portfolio;