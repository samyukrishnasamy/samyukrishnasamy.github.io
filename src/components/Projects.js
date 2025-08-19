import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "stopbullying.ai",
      description: "cyberbullying detection model using fine tuned google bert",
      link: "https://github.com/samyukrishnasamy/StopBullying.AI"
    },
    {
      id: 2,
      title: "project management application",
      description: "assists collaboration across teams ",
      link: "https://github.com/samyukrishnasamy/samyukrishnasamy.github.io"
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
      <div className="section-content">
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
      </div>
    </section>
  );
};

export default Projects; 