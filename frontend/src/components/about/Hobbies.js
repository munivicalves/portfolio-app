import { hobbies } from "../../data/hobbies";

function Hobbies() {
  return (
    <>
      <h2 className="section-title">
        Hobbies
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="badge"
            style={{
              padding: "10px 16px",
            }}
          >
            {hobby}
          </span>
        ))}
      </div>
    </>
  );
}

export default Hobbies;