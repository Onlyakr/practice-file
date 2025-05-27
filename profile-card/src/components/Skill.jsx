const Skill = ({ skill, level, color }) => {
  return (
    <li className="skill" style={{ backgroundColor: color }}>
      <span>
        {skill}{" "}
        {level === "beginner" ? "👶" : level === "intermediate" ? "👍" : "💪"}
      </span>
    </li>
  );
};
export default Skill;

// 👶 👍 💪
