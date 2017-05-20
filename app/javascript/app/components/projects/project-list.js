import React from 'react';
import glamorous from 'glamorous';
import {
  Row
} from 'react-bootstrap';

import Project from './project';

const ProjectList = ({ projects }) => {
  console.log('projectList', projects)

  return (
    <div>
      { projects ?
        (
          projects.length > 0 ?
          projects.map(p => <Project key={p.id} {...p} />) :
          (<h3>No se encontraron proyectos</h3>)
        ) :
        <h3>Loading...</h3>
      }
    </div>
  )
}

export default ProjectList;