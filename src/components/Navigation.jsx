import React, { useState } from 'react';

const Navigation = ({ currentSection, handleSectionChange }) => {
  const sections = ['About Me', 'Portfolio', 'Resume', 'Contact'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(' ', '-')}`}
              className={currentSection === section ? 'active' : ''}
              onClick={() => handleSectionChange(section)}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;