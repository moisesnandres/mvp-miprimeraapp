import React from 'react';
import glamorous from 'glamorous';
import {
  Row
} from 'react-bootstrap';

import Project from './project';

const ProjectList = ({ projects }) => (
  <div>
    <Row>
      <Project />
    </Row>
    <Row>
      <Project />
    </Row>
    <Row>
      <Project />
    </Row>
    <Row>
      <Project />
    </Row>
    <Row>
      <Project />
    </Row>
    <Row>
      <Project />
    </Row>
  </div>
)

export default ProjectList;