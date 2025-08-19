import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project",
      description: "Coming Soon!",
      link: "#"
    },
    {
      id: 2,
      title: "Project", 
      description: "Coming Soon!",
      link: "#"
    },
    {
      id: 3,
      title: "Project",
      description: "Coming Soon!",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 