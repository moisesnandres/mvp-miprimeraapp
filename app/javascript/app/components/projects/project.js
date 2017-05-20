import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const ProjectContainer = glamorous.div({
  width: '100%',
  minHeight: '110px',
  borderRadius: '2px',
  backgroundColor: '#fff',
  padding: '8px',
  marginBottom: '10px',
  display: 'flex',
  flexFlow: 'row wrap'
});

const ProjectImg = glamorous.div({
  width: '100px',
  height: '100%',
  borderRadius: '5px'
});

const Img = glamorous.img({
  width: '100px',
  height: '90px',
  borderRadius: '5px'
});

const ProjectInfo = glamorous.div({
  width: 'calc(100% - 100px)',
  minHeight: '80px',
  padding: '0 10px'
});

const ProjectName = glamorous.h1({
  fontSize: '16px',
  margin: '0'
})

class Project extends Component {
  render() {
    const { id, name, description, percentage, assignments_count, company, step } = this.props;
    return (
      <Row>
        <Link to={`/projects/${id}`} className="project" >
          <ProjectContainer>
            <ProjectImg>
              <Img src="http://lorempixel.com/output/business-q-c-200-200-10.jpg" />
            </ProjectImg>
            <ProjectInfo>
              <ProjectName className="text-midnight">{ name }</ProjectName>
              <p className="text-12 margin-top-5">{description}</p>
              <p className="text-12 margin-none"><span className="text-bold">Institución:</span>: {company.name}</p>
              <p className="text-12 margin-none"><span className="text-bold">Tecnologias:</span>: HTML5/CSS3/SASS/JAVASCRIPT/REACT/RUBY</p>
              <p className="text-12 margin-none"><span className="text-bold">Nº de miembros:</span> {assignments_count}/6 </p>
              <p className="text-12 margin-none"><span className="text-bold">Estado:</span> {step.name}</p>
              <p className="text-12 margin-none"><span className="text-bold">Duración:</span> 3 meses (20/06/2017 - 20/09/2017)</p>
            </ProjectInfo>
          </ProjectContainer>
        </Link>
      </Row>
      )
  }
}

export default Project;