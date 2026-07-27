import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaAws,
  FaCogs,
  FaDesktop,
  FaLinkedin,
  FaJava,
} from "react-icons/fa";
import { Award } from "lucide-react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config/api";
import Reveal from "../../components/layout/Reveal";
import { projectImageSrc } from "../../utils/projectImage";

const SKILLS = [
  { icon: FaReact, label: "React" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: FaDatabase, label: "MongoDB" },
  { icon: FaGithub, label: "GitHub" },
  { icon: FaHtml5, label: "HTML5" },
  { icon: FaCss3Alt, label: "CSS3" },
  { icon: FaJsSquare, label: "JavaScript" },
  { icon: FaDatabase, label: "MySQL" },
  { icon: FaDatabase, label: "SQL Server" },
  { icon: FaJava, label: "Java" },
  { icon: FaCogs, label: "Spring Boot" },
  { icon: FaAws, label: "AWS" },
  { icon: FaCogs, label: "Maven" },
  { icon: FaDesktop, label: "Java Swing" },
];

const CERTIFICATIONS = [
  "Minicurso de Análise de Dados - Cubo Academy",
  "Segurança da Informação - Unimoura",
  "Fundamentos de Gestão de Projetos - Unimoura",
  "Versionamento de Código com Git e GitHub - DIO",
  "Lógica de Programação - Blip DIO",
];

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/projects`)
      .then((response) => {
        setProjects(response.data.slice(-2).reverse());
      })
      .catch((error) => {
        console.error("Erro ao buscar projetos:", error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Olá, seja bem-vindo(a)</span>
        <h1 className={styles.title}>Bem-vindo ao Meu Portfólio</h1>
        <p className={styles.subtitle}>
          Explore meus projetos, serviços e conheça mais sobre mim!
        </p>
      </section>

      <Reveal as="section" className={styles.skillsetSection}>
        <h2 className={styles.sectionTitle}>Skillset</h2>
        <div className={styles.skillCarousel}>
          <div className={styles.skillScroll}>
            {[...SKILLS, ...SKILLS].map((skill, idx) => (
              <div className={styles.skillCard} key={`${skill.label}-${idx}`}>
                <skill.icon />
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tags}>
          <span>Clean Code</span>
          <span>Resolução de problemas</span>
          <span>Comunicação</span>
          <span>Proatividade</span>
          <span>Pensamento Crítico</span>
          <span>Inovação</span>
        </div>
      </Reveal>

      <Reveal as="section" className={styles.projects}>
        <h2 className={styles.sectionTitle}>Últimos Projetos</h2>
        <div className={styles.projectCarousel}>
          {projects.map((project) => (
            <div className={styles.projectCard} key={project._id}>
              <img
                src={projectImageSrc(project.imageUrls[0])}
                alt={project.title}
                className={styles.projectImg}
              />
              <h3>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <p className={styles.projectTechs}>
                <strong>Tecnologias:</strong> {project.techs.join(", ")}
              </p>
              <Link to="/portfolio" className={styles.projectLink}>
                Ver mais →
              </Link>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.certifications}>
        <h2 className={styles.sectionTitle}>Certificações</h2>
        <div className={styles.certGrid}>
          {CERTIFICATIONS.map((cert) => (
            <div className={styles.certBadge} key={cert}>
              <Award size={18} />
              <span>{cert}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>Pensando além do código</h2>
        <blockquote>
          "Para mim, tecnologia é sobre resolver problemas de forma criativa,
          construindo soluções que fazem a diferença."
          <footer>– Munique Alves</footer>
        </blockquote>
      </Reveal>

      <Reveal as="section" className={styles.cta}>
        <h2>Vamos construir algo incrível juntos?</h2>
        <p>Entre em contato comigo através do e-mail: munivicalves@gmail.com</p>
        <Link to="/about" className={styles.ctaButton}>
          Saiba mais sobre mim
        </Link>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/munivicalves"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/munique-alves"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </Reveal>
    </div>
  );
}
