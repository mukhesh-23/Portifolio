import React from 'react';
import'./Projects.css'

const Projects = () => (
  <section className="projects p-4">
    <h2>Projects</h2>
    <div className="project-card">
      <h4>Project Title</h4>
      <p>Purpose: Description of what the project does.</p>
      <p>Technologies: ReactJS, Spring Boot, MySQL</p>
      <p>Responsibilities: Summary of your role and any challenges solved.</p>
      <a href="https://github.com" className="btn btn-outline-primary">GitHub</a>
    </div>
  </section>
);

export default Projects;
