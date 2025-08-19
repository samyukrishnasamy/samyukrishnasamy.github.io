import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "project",
      description: "coming soon!",
      link: "#"
    },
    {
      id: 2,
      title: "project", 
      description: "coming soon!",
      link: "#"
    },
    {
      id: 3,
      title: "project",
      description: "coming soon!",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>my projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">view project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 