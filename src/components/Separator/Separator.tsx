import React from 'react';

interface SeparatorProps {
  position: string;
  number: number;
  text: string;
  linkText: string;
  link: string;
}

function Separator({position, number, text, linkText, link}:SeparatorProps) {
  return (
    <div className={`separator ${position}`}>
      <p className="separator_number">{number}</p>
      <div className="separator_line"></div>
      <div className="separator_line"></div>
      <div className="separator_text">
        <span>{text} </span>
        <a href={link}>{linkText}</a>
      </div>
    </div>
  );
}

export default Separator;
