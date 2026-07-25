function SkillCard({ icon: Icon, name }) {
  return (
    <div className="skill-card">

      <Icon className="skill-icon" />

      <span>{name}</span>

    </div>
  );
}

export default SkillCard;