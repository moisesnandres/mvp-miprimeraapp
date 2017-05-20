import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import {
  setProjects,
  setSearchText
} from '../../actions/index';

import { getFilteredProjects } from '../../selectors/';

import ProjectList from './project-list';
import Filter from './filter';

class ProjectIndex extends Component {

  componentDidMount() {
    axios.get('/api/v1/projects/index')
      .then(response => {
        console.log('projects response', response);
        this.props.dispatch(setProjects(response.data.projects))
      })
  }

  handleChangeText = (value) => {
    this.props.dispatch(setSearchText(value));
  }

  render() {
    return (
      <Grid className="">
        <Row>
          <h2 className="text-blue">Encuentra tu projecto ideal y se participe de proyectos reales</h2>
          <h5>Ayuda a las empresas a completar sus proyectos sin fines de lucro y a cambio recibe un certificado validando tu participación en el proyecto</h5>
        </Row>
        <Row>
          <Filter handleChangeText={this.handleChangeText}/>
        </Row>
        <ProjectList projects={this.props.projects} />
      </Grid>
    )
  }

}

const mapStateToProps = (state) => ({ projects: getFilteredProjects(state), searchText: state.projects.searchText });

export default connect(mapStateToProps)(ProjectIndex);