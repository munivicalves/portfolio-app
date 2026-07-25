function TechList({ techs = [] }) {
  if (techs.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mt-5">
      {techs.map((tech) => (
        <span
          key={tech}
          className="
            px-3
            py-1
            rounded-full
            bg-pink-500
            text-white
            text-sm
          "
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export default TechList;