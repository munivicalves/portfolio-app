
import styles from '../styles/About.module.css';
import { Cake, MapPin, Laptop } from 'lucide-react';

function About({ darkMode }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
        <div className={styles.intro}>
        <h2 className={styles.title}>
          Sobre Mim 👩‍💻
        </h2>
        <p class= {styles.description}>
          Apaixonada por resolver problemas com código.<br/>
          Desenvolvedora júnior em formação, unindo lógica, back-end e visão estratégica para entregar soluções reais.
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
        <section className={`${styles.card} ${styles.experienciaScroll}`}>
          <h2 className={styles.title}>
            Experiência Profissional
          </h2>
          <div className={styles.experienceItem}>
            <h3 className={styles.experienceTitle}>Assistente Administrativo</h3>
            <p className={styles.experienceSubtitle}>Baterias Moura | JAN/2023 – ATUAL</p>
            <ul className={styles.experienceList}>
              <li>Apoio à gestão administrativa com foco em controle de contas a receber e organização financeira</li>
              <li>Análise de crédito para avaliação de risco e definição de limites comerciais</li>
              <li>Realização de cobranças e renegociação de dívidas com clientes</li>
              <li>Negociação com clientes e manutenção do relacionamento comercial</li>
              <li>Elaboração de relatórios financeiros e de vendas para tomada de decisões</li>
              <li>Identificação e correção de inconsistências em lançamentos e documentos financeiros</li>
              <li>Resolução de problemas</li>
            </ul>
            <br/><br/>
            <h3 className={styles.experienceTitle}>Gerente de Finanças</h3>
            <p className={styles.experienceSubtitle}>Maisa Pires Ateliê | SET/2021 – JAN/2023</p>
            <ul className={styles.experienceList}>
              <li>Responsável pela gestão financeira da empresa: contas a pagar, conciliações bancárias, cobrança e folha de pagamento</li>
              <li>Condução de atividades de Recursos Humanos: admissões, demissões, controle de ponto, férias e feedbacks</li>
              <li>Resolução de conflitos financeiros com clientes, promovendo atendimento de excelência e melhoria no relacionamento comercial</li>
              <li>Otimização de processos internos financeiros e administrativos, contribuindo para maior eficiência e controle</li>
            </ul>
            <br/><br/>
            <h3 className={styles.experienceTitle}>Assistente Administrativo</h3>
            <p className={styles.experienceSubtitle}>Maisa Pires Ateliê | JAN/2021 – SET/2021</p>
            <ul className={styles.experienceList}>
              <li>Apoio à gestão administrativa e financeira da empresa</li>
              <li>Conciliações bancárias e controle de contas a pagar e a receber</li>
              <li>Emissão de boletos e acompanhamento de pagamentos de clientes</li>
              <li>Suporte na organização de processos internos e atendimento ao cliente</li>
              <li>Atendimento de clientes</li>
            </ul>
          </div>

        </section>

        <div className={styles.row}>
          <section className={styles.card}>
            <h2 className={styles.title}>
              Educação <span className={styles.highlight}>e Cursos</span>
            </h2>
            <ul>
              <li>Sistemas de Informação — Em andamento</li>
              <li>Curso de Análise de Dados</li>
              <li>Curso de Vendas</li>
            </ul>
          </section>

          <section className={`${styles.card} ${styles.competenciasScroll}`}>
            <h2 className={styles.title}>Competências</h2>
            <div className={styles.skillsGrid}>
                <ul>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>After Effects</li>
                  <li>Blender</li>
                </ul>
                <ul>
                  <li>HTML & CSS/SASS</li>
                  <li>JavaScript ES6+</li>
                  <li>React</li>
                  <li>Git & Bootstrap</li>
                </ul>
            </div>
          </section>

        </div>

        <section className={`${styles.card} ${styles.idiomasHobbies}`}>
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
                  <div className={styles.progressFill} style={{ width: '40%%' }}></div>
                </div>
              </div>
            </div>

            <div className={styles.hobbiesColumn}>
              <h2 className={styles.title}>Hobbies</h2>
              <div className={styles.hobbyTags}>
                <span>Desenvolvimento de projetos pessoais</span>
                <span>Desenho e ilustração digital</span>
                <span>Fotografia</span>
                <span>Exploração de novas tecnologias</span>
              </div>
            </div>
          </div>
        </section>


    </div>
    </div>
  );
}

export default About;
