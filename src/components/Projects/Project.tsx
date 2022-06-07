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
  description: Array<string>;
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
      <img src={projectScreenshot} alt={`project ${name} screenshot`} />
      <figcaption className="project__card__content">
        <h3 className="project__card__content__title">{name}</h3>
        <ul className="project__card__content__technologies">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <ul className="project__card__content__description">
          {description.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
        <div className="project__card__content__links">
          {(() => {
            if (liveDemo === '') {
              return false;
            }
            return (
              <a
                href={liveDemo}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                demo
              </a>
            );
          })()}

          <a
            href={githubCode}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </a>
        </div>
      </figcaption>
    </figure>
  );
}

export default Project;
