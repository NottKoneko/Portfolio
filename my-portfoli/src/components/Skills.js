import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "Python", level: "80%" },
    { name: "JavaScript", level: "70%" },
    { name: "React", level: "65%" }
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <span>{skill.name}</span>
          <div className="skill-bar" style={{ width: skill.level }}></div>
        </div>
      ))}
    </section>
  );
}

export default Skills;