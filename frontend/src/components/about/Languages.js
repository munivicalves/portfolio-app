import { languages } from "../../data/languages";

function Languages() {
  return (
    <>
      <h2 className="section-title">
        Idiomas
      </h2>

      {languages.map((language) => (
        <div
          key={language.name}
          style={{
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            {language.name} — {language.level}
          </p>

          <div
            style={{
              background: "#3a3a3a",
              height: "10px",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${language.progress}%`,
                height: "100%",
                background: "var(--primary)",
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default Languages;