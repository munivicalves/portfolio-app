import { useEffect, useState } from "react";

import Section from "../ui/Section";
import ProjectCard from "../project/ProjectCard";

import { getProjects } from "../../services/projectService";

function LatestProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();

        // mostra apenas os 2 últimos
        setProjects(data.slice(-2).reverse());
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    }

    loadProjects();
  }, []);

  return (
    <Section
      title="Últimos Projetos"
      subtitle="Projetos desenvolvidos para consolidar meus estudos e demonstrar minhas habilidades técnicas."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}

export default LatestProjects;