import styles from "./About.module.css";
import { Cake, MapPin, Laptop } from "lucide-react";
import Reveal from "../../components/layout/Reveal";

const EXPERIENCES = [
  {
    title: "Analista Administrativo",
    subtitle: "Baterias Moura | JAN/2023 – ATUAL",
    items: [
      "Atuação em ambiente corporativo com sistemas ERP, realizando análise, validação e tratamento de dados.",
      "Contato direto com regras de negócio e processos financeiros, contábeis e fiscais, desenvolvendo visão sistêmica.",
      "Experiência em contas a receber, contas a pagar e faturamento, com foco na análise e confiabilidade das informações.",
      "Desenvolvimento de pensamento analítico, resolução de problemas, organização e atenção aos detalhes.",
      "Colaboração com diferentes áreas da empresa, contribuindo para o entendimento de processos e fluxos de negócio.",
    ],
  },
  {
    title: "Gerente de Finanças",
    subtitle: "Maisa Pires Ateliê | SET/2021 – JAN/2023",
    items: [
      "Gestão de processos administrativos e financeiros, com foco em organização, controle e otimização de processos.",
      "Experiência com análise de dados, tomada de decisão e resolução de problemas.",
      "Desenvolvimento de habilidades de liderança, responsabilidade e visão estratégica.",
    ],
  },
  {
    title: "Assistente Administrativo",
    subtitle: "Maisa Pires Ateliê | JAN/2021 – SET/2021",
    items: [
      "Apoio a rotinas administrativas, controle de informações e organização de processos internos.",
      "Experiência com sistemas, dados e padronização de fluxos operacionais.",
    ],
  },
];

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Sobre Mim 👩‍💻</h2>
          <p className={styles.description}>
            Apaixonada por transformar problemas em soluções através da
            tecnologia.
            <br />
            Sou desenvolvedora de software com background na área financeira,
            unindo visão analítica e tecnologia para criar soluções que geram
            valor.
          </p>
          <div className={styles.infos}>
            <div className={styles.infoItem}>
              <Cake size={16} strokeWidth={2} /> 26/12/2002
            </div>
            <div className={styles.infoItem}>
              <MapPin size={16} strokeWidth={2} /> Uberlândia, MG - Brasil
            </div>
            <div className={styles.infoItem}>
              <Laptop size={16} strokeWidth={2} /> Remoto ou Híbrido
            </div>
          </div>
        </div>

        <Reveal as="section" className={styles.card}>
          <h2 className={styles.title}>Experiência Profissional</h2>
          <div className={styles.timeline}>
            {EXPERIENCES.map((exp) => (
              <div
                className={styles.timelineItem}
                key={`${exp.title}-${exp.subtitle}`}
              >
                <div className={styles.timelineDot} />
                <h3 className={styles.experienceTitle}>{exp.title}</h3>
                <p className={styles.experienceSubtitle}>{exp.subtitle}</p>
                <ul className={styles.experienceList}>
                  {exp.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className={styles.row}>
          <Reveal as="section" className={styles.card}>
            <h2 className={styles.title}>Educação e Formação</h2>
            <ul>
              <li>Sistemas de Informação — Concluído em 2026</li>
            </ul>
          </Reveal>

          <Reveal as="section" className={styles.card}>
            <h2 className={styles.title}>Competências</h2>
            <div className={styles.skillsGrid}>
              <ul className={styles.skillsList}>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Maven</li>
                <li>Node.js & Express</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>HTML & CSS/SASS</li>
                <li>JavaScript ES6+</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>GitHub/GIT</li>
                <li>Docker</li>
                <li>Metodologias Ágeis</li>
                <li>APIs REST</li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal as="section" className={styles.card}>
          <div className={styles.skillsGrid}>
            <div className={styles.languageColumn}>
              <h2 className={styles.title}>Idiomas</h2>
              <div className={styles.languageItem}>
                <span>Português — Nativo</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className={styles.languageItem}>
                <span>Inglês — Básico</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className={styles.hobbiesColumn}>
              <h2 className={styles.title}>Hobbies</h2>
              <div className={styles.hobbyTags}>
                <span>Desenvolvimento de projetos pessoais</span>
                <span>Assistir a filmes e séries</span>
                <span>Viajar e conhecer lugares diferentes</span>
                <span>Academia</span>
                <span>Exploração de novas tecnologias</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default About;
