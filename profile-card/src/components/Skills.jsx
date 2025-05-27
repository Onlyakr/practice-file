import Skill from "./Skill";

const Skills = ({ skills }) => {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </ul>
  );
};
export default Skills;
