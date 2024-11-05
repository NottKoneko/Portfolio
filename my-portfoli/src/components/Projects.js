import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    { name: "Discord Bot", description: "UwU-Kun with AI chat and logging" },
    { name: "Washiez", description: "A Roblox café game" }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;