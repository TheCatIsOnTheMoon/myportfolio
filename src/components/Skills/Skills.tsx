import React from 'react';

import { skills } from '../../data/skills';
import Skill from './Skill';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills and tech</h2>
      <ul id="skills_container">
        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </ul>
    </section>
  );
}

export default Skills;
