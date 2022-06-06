import React from 'react'

interface SkillProps {
  name: string;
  icon: string;
}

function Skill({ name, icon }:SkillProps) {
    let skillIcon = require(`../../assets/svg/${icon}`)
  return (
    <li className='skill'>
      <img
        src={skillIcon}
        alt={`${name}-icon`}
        id={`${name}-icon`}
        className="skill__icon icon"
      />
      <p className='skill__name'>{name}</p>
    </li>
  )
}

export default Skill