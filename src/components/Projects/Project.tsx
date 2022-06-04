import React from 'react';

interface ProjectProps {
  name: string;
  number: number;
  startDate: string;
  endDate: string;
  technologies: Array<string>;
  githubCode: string;
  liveDemo: string;
  screenshot: string;
  description: string;
  display: boolean;
}

function Project({
  name,
  number,
  startDate,
  endDate,
  technologies,
  githubCode,
  liveDemo,
  screenshot,
  description,
  display,
}: ProjectProps) {
  let projectScreenshot = require(`../../assets/screenshots/${screenshot}`);

  return (
    <figure className="project__card" id={`project ${number}`}>
      <h3>{name}</h3>
      <p className="technologies">{technologies}</p>
      <p className="description">{description}</p>
      <img
        src={projectScreenshot}
        alt={`project ${name} screenshot`}
      />
      <figcaption>
        <a
          href={liveDemo}
          className="project__card__linklive"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
        <a
          href={githubCode}
          className="project__card__linkgithub button"
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>
      </figcaption>
    </figure>
  );
}

export default Project;
