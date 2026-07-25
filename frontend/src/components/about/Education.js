function Education() {
  return (
    <>
      <h2 className="section-title">
        Educação
      </h2>

      <div className="card">
        <h3
          style={{
            marginBottom: "8px",
            fontSize: "1.2rem",
          }}
        >
          Bacharelado em Sistemas de Informação
        </h3>

        <p
          style={{
            color: "var(--primary)",
            fontWeight: 600,
            marginBottom: "6px",
          }}
        >
          Universidade de Uberaba (UNIUBE)
        </p>

        <small
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Concluído em 2026
        </small>

        <p
          style={{
            marginTop: "20px",
            lineHeight: "1.8",
            color: "var(--text-secondary)",
          }}
        >
          Formação voltada para desenvolvimento de software,
          programação orientada a objetos, estruturas de dados,
          algoritmos, banco de dados, engenharia de software e
          desenvolvimento web.
        </p>
      </div>
    </>
  );
}

export default Education;