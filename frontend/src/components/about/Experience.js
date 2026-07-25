import { experiences } from "../../data/experience";

function Experience() {
  return (
    <>
      <h2 className="section-title">
        Experiência Profissional
      </h2>

      <div className="space-y-10 mt-10">
        {experiences.map((job) => (
          <div
            key={job.company + job.role}
            style={{
              borderBottom: "1px solid var(--border)",
              paddingBottom: "32px",
              marginBottom: "32px",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                marginBottom: "8px",
              }}
            >
              {job.role}
            </h3>

            <p
              style={{
                color: "var(--primary)",
                fontWeight: "600",
                marginBottom: "4px",
              }}
            >
              {job.company}
            </p>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: ".9rem",
                marginBottom: "22px",
              }}
            >
              {job.period}
            </p>

            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {job.activities.map((activity) => (
                <li
                  key={activity}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    listStyle: "none",
                    color: "var(--text)",
                    lineHeight: "1.7",
                  }}
                >
                  <span
                    style={{
                      color: "var(--primary)",
                      fontSize: "1.4rem",
                      lineHeight: "1",
                      marginTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    •
                  </span>

                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;