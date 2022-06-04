import React from 'react'

interface SkillProps {
  name: string;
  icon: string;
}

function Skill({ name, icon }:SkillProps) {
    let skillIcon = require(`../../assets/svg/${icon}`)
  return (
    <li>
      <img
        src={skillIcon}
        alt={`${name}-icon`}
        id={`${name}-icon`}
        className="icon"
      />
    </li>
  )
}

export default Skill