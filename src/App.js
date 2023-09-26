import React, { Component, useRef } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './App.css';
import arrow from './assets/white_arrow.png';
import portrait from './assets/headshot.jpg';
import localist from './assets/localist.jpg';
import greenGoals from './assets/GreenGoals.jpg';
import favoriteArtists from './assets/favorite-artists-2.jpg';
import hslColor from './assets/hsl-color-2.jpg';
import minesweeper from './assets/minesweeper.jpg';
import blackJack from './assets/blackjack.jpg';
import roshambo from './assets/roshambo.jpg';
import starWars from './assets/star-wars.jpg';

function App() {
  const showHome = () => {
    let home = document.querySelector('.nav-bar');
    home.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showAboutMe = () => {
    let aboutMe = document.querySelector('.about-me');
    aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showPortfolio = () => {
    let portfolioSection = document.querySelector('.portfolio');
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showTechSkills = () => {
    let technologies = document.querySelector('.technologies');
    technologies.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const showContactMe = () => {
    let contactMe = document.querySelector('.contact-me');
    contactMe.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <body>
      <nav className="nav-bar">
        <div className="logo">TOBIAS NORTON</div>

        <div className="links">
          <Menu right className="react-burger">
            <p id="home" className="menu-item" onClick={showHome}>
              Home
            </p>
            <p id="about" className="menu-item" onClick={showAboutMe}>
              About Me
            </p>
            <p id="contact" className="menu-item" onClick={showPortfolio}>
              Portfolio
            </p>
            <p id="contact" className="menu-item" onClick={showTechSkills}>
              Tech Skills
            </p>
            <a
              id="contact"
              className="menu-item"
              href="https://github.com/TobiasNorton"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              id="contact"
              className="menu-item"
              href="https://www.linkedin.com/in/tobiasnorton"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <p className="menu-item" onClick={showContactMe}>
              Contact
            </p>
          </Menu>
          <p onClick={showAboutMe}>About Me</p>
          <p onClick={showPortfolio}>Portfolio</p>
          <a href="https://github.com/TobiasNorton" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tobiasnorton" target="_blank">
            LinkedIn
          </a>
        </div>
      </nav>

      <section className="main">
        <p className="title">TOBIAS NORTON</p>
        {/* <div className="sweet-line" /> */}
        <p className="caption">Software Engineer</p>
        {/* <div className="bottom-space" /> */}
        <img src={arrow} className="arrow bounce" onClick={() => showAboutMe()} alt="About Me" />
      </section>

      <section className="about-me">
        <div className="about-me-header">About Me</div>
        <div className="about-me-line" />
        <img src={portrait} className="portrait" />
        {/* <p className="about-me-body">
          Hi, I'm Toby. I'm a software engineer from St. Petersburg, Florida. I graduated from the
          Savannah College of Art and Design with a BFA in Illustration and did freelance
          illustration and design work for years. More recently, I made the life-changing decision
          to to accelerate my passion for coding by attending the program at Suncoast Developers
          Guild, a 12-week fully-immersive coding boot camp with emphasis on both the front and
          back-ends of web development. Since then I have worked as a front-end developer with a
          focus in JavaScript, React, and Redux for eCommerce and most recently at Rosetta Stone.
          When I'm not coding you can find me working on a painting or playing my guitar way too
          loud.
        </p> */}
        <p className="about-me-body">
          Hi, I'm Toby. I'm a Software Engineer based in St. Petersburg, Florida with over 3 years
          of professional experience in JavaScript, TypeScript, ReactJS, NodeJS, and PostgreSQL. I
          am a proud alumnus of both Suncoast Developers Guild, a 12-week fully-immersive coding
          bootcamp, and The Savannah College of Art and Design.
          <br />
          <br />
          My career journey has granted me the privilege of contributing to a wide range of projects
          as both a front-end and full-stack engineer spanning multiple industries, from consulting
          engagements at 64labs and E2Generations to working on proprietary software at Rosetta
          Stone for their world-renowned language-learning products. I take pride in my strong work
          ethic, my relentless drive to learn and implement new technologies, and my passion for
          collaboration.
          <br />
          <br />
          When I'm not coding you can find me painting or playing my guitar at unreasonable volumes.
        </p>
        {/* <img src={arrow} className="black-arrow bounce" onClick={showPortfolio} /> */}
      </section>

      <section className="portfolio">
        <div className="portfolio-header">Portfolio</div>
        <div className="about-me-line" />
        <div className="thumbnail-container">
          <div>
            <a href="https://localist-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={localist} className="thumbnail" alt="Localist" />
            </a>
          </div>

          <div>
            <a href="https://greengoals.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={greenGoals} className="thumbnail" alt="GreenGoals" />
            </a>
          </div>

          <div>
            <a
              href="http://tobiasnorton-favorite-artists.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={favoriteArtists} className="thumbnail" alt="Favorite Artists" />
            </a>
          </div>
          <div>
            <a href="http://hsl-color-picker.surge.sh/" target="_blank" rel="noopener noreferrer">
              <img src={hslColor} className="thumbnail" alt="HSL Color Picker" />
            </a>
          </div>
          <div>
            <a
              href="http://tobiasnorton-minesweeper.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={minesweeper} className="thumbnail" alt="Minesweeper" />
            </a>
          </div>
          <div>
            <a
              href="http://blackjack-tobiasnorton.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={blackJack} className="thumbnail" alt="Blackjack" />
            </a>
          </div>
          <div>
            <a
              href="http://roshambo-tobiasnorton.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={roshambo} className="thumbnail" alt="Roshambo" />
            </a>
          </div>
          <div>
            <a
              href="http://tobiasnorton-star-wars-characters.surge.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={starWars} className="thumbnail" alt="Star Wars Characters" />
            </a>
          </div>
        </div>
        {/* <img src={arrow} className="third-arrow bounce" onClick={showTechSkills} /> */}
      </section>

      <section className="technologies">
        <div className="technology-header">Skills & Technologies</div>
        <div className="tech-line" />
        <div className="tech-container">
          <div className="tech">
            <i class="fab fa-js-square" />
            <p className="tech-caption">JavaScript</p>
          </div>
          <div className="tech">
            <i class="fab fa-react" />
            <p className="tech-caption">ReactJS</p>
          </div>
          {/* <div className="tech">
            <i class="fas fa-4x fa-gem text-primary mb-3 sr-icon-1" />
            <p className="tech-caption">Ruby</p>
          </div> */}
          <div className="tech">
            <i class="fab fa-brands fa-node" />
            <p className="tech-caption">NodeJS</p>
          </div>
          <div className="tech">
            <i class="fab fa-css3-alt" />
            <p className="tech-caption">CSS3</p>
          </div>
          <div className="tech">
            <i class="fab fa-html5" />
            <p className="tech-caption">HTML5</p>
          </div>
        </div>
      </section>
      <section className="contact-me">
        <div className="contact-me-header">Thanks for stopping in!</div>
        <div className="contact-line" />
        <div>
          <div className="contact-me-container">
            <div className="contact">
              <i class="fab fa-github" />
              <p>github.com/TobiasNorton</p>
            </div>
            <div className="contact">
              <i class="fas fa-envelope" />
              <p>tobiaswnorton@gmail.com</p>
            </div>
            <div className="contact">
              <a href="https://www.linkedin.com/in/tobiasnorton" target="_blank">
                <i class="fab fa-linkedin" />
              </a>
              <p>linkedin.com/in/tobiasnorton</p>
              <div />
            </div>
            {/* <div className="contact">
              <i class="fas fa-phone" />
              <p>(941)-587-9667</p>
            </div> */}
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
