function Skills() {
  const categories = {
    Frontend: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "CSS Modules",
    ],

    Backend: [
      "Node.js",
      "Express",
      "Java",
      "Spring Boot",
    ],

    "Banco de Dados": [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
    ],

    Ferramentas: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Maven",
    ],
  };

  return (
    <>
      <h2 className="section-title">
        Competências
      </h2>

      {Object.entries(categories).map(([title, items]) => (
        <div
          key={title}
          style={{
            marginBottom: "28px",
          }}
        >
          <h3
            style={{
              marginBottom: "14px",
              fontSize: "1.1rem",
              fontWeight: 700,
            }}
          >
            {title}
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {items.map((skill) => (
              <span
                key={skill}
                className="badge"
                style={{
                  padding: "10px 18px",
                  fontSize: ".9rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Skills;