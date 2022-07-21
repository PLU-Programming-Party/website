import React from 'react';
import './Project.css';

/* eslint-disable */
const ProjectComponent = (props) => {
/* eslint-enable */
  const { name, members, titan } = props;
  return (
    <div className="project">
      <h3 className="project-title">{name}</h3>
      <p className="project-members">
        <strong>Members:</strong>
        {' '}
        {members.join(', ')}
      </p>
      {}
      {titan !== null ? (
        <p className="project-titan">
          <strong>Titan:</strong>
          {' '}
          {titan}
        </p>
      ) : ''}
    </div>
  );
};

export default ProjectComponent;
