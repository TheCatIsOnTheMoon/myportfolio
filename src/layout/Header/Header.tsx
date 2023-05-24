import React from 'react';
import iconGithub from '../../assets/svg/github.svg';
import iconLinkedin from '../../assets/svg/linkedin.svg';

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <h1>Samantha Gillet-Garas</h1>
          <div className="header__container__links">
            <a href="https://github.com/TheCatIsOnTheMoon">
              <img className="header__container__links__icon" src={iconGithub} alt="link github" />
            </a>
            <a href="https://www.linkedin.com/in/sgilletgaras/">
              <img className="header__container__links__icon" src={iconLinkedin} alt="link linkedIn" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
