import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Project 2", 
      description: "A mobile app developed using React Native",
      technologies: ["React Native", "Firebase"],
      link: "#"
    },
    {
      id: 3,
      title: "Project 3",
      description: "A data analysis project using Python",
      technologies: ["Python", "Pandas", "Matplotlib"],
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
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 