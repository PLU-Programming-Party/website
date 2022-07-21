import React from 'react';
import ProjectComponent from '../../Project/Project';
/* eslint-disable */
const ProjectsPage = () => {
  const projects = require('../../Project/test-data.json')
  /* eslint-enable */
  return (
    <div className="projects">
      {projects.data.map((project) => (
        <ProjectComponent
          key={project.name}
          name={project.name}
          members={project.members}
          titan={project.titan}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
