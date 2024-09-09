import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Fixing up a website',
    link: 'https://github.com/JackRozov/coderefactor-Challenge-1',
    github: 'https://jackrozov.github.io/coderefactor-Challenge-1/'
  },
  {
    title: 'Project 2',
    description: 'A portfolio',
    link: 'https://jackrozov.github.io/Portfolio-challenge-2-/',
    github: 'https://github.com/JackRozov/Portfolio-challenge-2-'
  },
  {
    title: 'Project 3',
    description: 'Some Javascript',
    link: 'https://jackrozov.github.io/javascriptchallenge1/',
    github: 'https://github.com/JackRozov/javascriptchallenge1/deployments'
  },
  {
    title: 'Project 4',
    description: 'Blog post',
    link: 'https://jackrozov.github.io/Blog-Post-challenge-4/',
    github: 'https://github.com/JackRozov/Blog-Post-challenge-4'
  },
  {
    title: 'Project 5',
    description: 'Made a taskboard',
    link: 'https://jackrozov.github.io/Third-Party-apis-challenge-5/',
    github: 'https://github.com/JackRozov/Third-Party-apis-challenge-5'
  },
  {
    title: 'Project 6',
    description: 'Made a Weather Forecast',
    link: 'https://jackrozov.github.io/Weather-forecast-challenge-6/',
    github: 'https://github.com/JackRozov/Weather-forecast-challenge-6'
  },
  
];

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>Live Demo</a>
          <a href={project.github}>GitHub Repo</a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
