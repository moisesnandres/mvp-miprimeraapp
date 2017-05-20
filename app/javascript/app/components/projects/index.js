import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import ProjectList from './project-list';
import Filter from './filter';

class ProjectIndex extends Component {

  render() {
    return (
      <Grid className="">
        <Row>
          <h2 className="text-blue">Encuentra tu projecto ideal y se participe de proyectos reales</h2>
          <h5>Ayuda a las empresas a completar sus proyectos sin fines de lucro y a cambio recibe un certificado validando tu participación en el proyecto</h5>
        </Row>
        <Row>
          <Filter />
        </Row>
        <ProjectList />
      </Grid>
    )
  }

}

export default ProjectIndex;