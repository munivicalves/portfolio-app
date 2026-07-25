import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

function Skillset() {
  return (
    <section className="overflow-hidden pb-12">

      <h2 className="section-title">
    Stack Principal
      </h2>

      <p className="subtitle mb-10">
          Tecnologias utilizadas no desenvolvimento das minhas aplicações.
      </p>
      <div className="skill-carousel">
        <div className="skill-track">

          {[...skills, ...skills].map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              icon={skill.icon}
              name={skill.name}
            />
          ))}

        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        <span className="badge">Autonomia</span>
        <span className="badge">Visão 360º</span>
        <span className="badge">Flexibilidade</span>
        <span className="badge">Tech Fluency</span>
      </div>

    </section>
  );
}

export default Skillset;