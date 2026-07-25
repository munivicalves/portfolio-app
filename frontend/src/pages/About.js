import styles from '../styles/About.module.css';
import { Cake, MapPin, Laptop } from 'lucide-react';
import Reveal from '../components/Reveal';

const EXPERIENCES = [
  {
    title: 'Assistente Administrativo',
    subtitle: 'Baterias Moura | JAN/2023 – ATUAL',
    items: [
      'Apoio à gestão administrativa com foco em controle de contas a receber e organização financeira',
      'Análise de crédito para avaliação de risco e definição de limites comerciais',
      'Realização de cobranças e renegociação de dívidas com clientes',
      'Negociação com clientes e manutenção do relacionamento comercial',
      'Elaboração de relatórios financeiros e de vendas para tomada de decisões',
      'Identificação e correção de inconsistências em lançamentos e documentos financeiros',
      'Resolução de problemas',
    ],
  },
  {
    title: 'Gerente de Finanças',
    subtitle: 'Maisa Pires Ateliê | SET/2021 – JAN/2023',
    items: [
      'Responsável pela gestão financeira da empresa: contas a pagar, conciliações bancárias, cobrança e folha de pagamento',
      'Condução de atividades de Recursos Humanos: admissões, demissões, controle de ponto, férias e feedbacks',
      'Resolução de conflitos financeiros com clientes, promovendo atendimento de excelência e melhoria no relacionamento comercial',
      'Otimização de processos internos financeiros e administrativos, contribuindo para maior eficiência e controle',
    ],
  },
  {
    title: 'Assistente Administrativo',
    subtitle: 'Maisa Pires Ateliê | JAN/2021 – SET/2021',
    items: [
      'Apoio à gestão administrativa e financeira da empresa',
      'Conciliações bancárias e controle de contas a pagar e a receber',
      'Emissão de boletos e acompanhamento de pagamentos de clientes',
      'Suporte na organização de processos internos e atendimento ao cliente',
      'Atendimento de clientes',
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
            Apaixonada por resolver problemas com código.
            <br />
            Desenvolvedora júnior em formação, unindo lógica, back-end e visão estratégica para
            entregar soluções reais.
          </p>
          <div className={styles.infos}>
            <div className={styles.infoItem}>
              <Cake size={16} strokeWidth={2} /> 22 anos
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
              <div className={styles.timelineItem} key={`${exp.title}-${exp.subtitle}`}>
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
              <li>Sistemas de Informação — Em andamento</li>
            </ul>
          </Reveal>

          <Reveal as="section" className={styles.card}>
            <h2 className={styles.title}>Competências</h2>
            <div className={styles.skillsGrid}>
              <ul>
                <li>Figma</li>
                <li>React</li>
                <li>Node.js & Express</li>
                <li>Java</li>
                <li>MySQL</li>
              </ul>
              <ul>
                <li>HTML & CSS/SASS</li>
                <li>JavaScript ES6+</li>
                <li>MongoDB</li>
                <li>GitHub</li>
                <li>Metodologias Ágeis</li>
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
                  <div className={styles.progressFill} style={{ width: '100%' }}></div>
                </div>
              </div>
              <div className={styles.languageItem}>
                <span>Inglês — Básico</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} style={{ width: '40%' }}></div>
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
