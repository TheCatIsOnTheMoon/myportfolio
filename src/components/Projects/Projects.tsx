import React from 'react';

import { projects } from '../../data/projects';
import Project from './Project';
import jupiter from '../../assets/planetsvg/jupiter.svg';

function Projects() {
  let filteredProjects = projects.filter(function (element) {
    return element.display === true;
  });

  return (
    <section id="projects">
      <h2>Projects</h2>
      <img src={jupiter} alt="img" className='planet' id="jupiter"></img>
      <article className="project" id="project_container">
        {filteredProjects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            number={project.number}
            startDate={project.startDate}
            endDate={project.endDate}
            technologies={project.technologies}
            githubCode={project.githubCode}
            liveDemo={project.liveDemo}
            screenshot={project.screenshot}
            description={project.description}
            display={project.display}
          />
        ))}
      </article>
    </section>
  );
}

export default Projects;
