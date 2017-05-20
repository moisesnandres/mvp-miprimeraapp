import React from 'react';
import glamorous from 'glamorous';
import { Image } from 'react-bootstrap';

const ProjectContainer = glamorous.div({
  width: '100%',
  minHeight: '110px',
  border: '1px solid rgba(52, 73, 94, 0.4)',
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
  height: '80px',
  padding: '0 10px'
});

const ProjectName = glamorous.h1({
  fontSize: '16px',
  margin: '0'
})

const Project = (props) => (
  <ProjectContainer>
    <ProjectImg>
      <Img src="http://lorempixel.com/output/business-q-c-200-200-10.jpg" />
    </ProjectImg>
    <ProjectInfo>
      <ProjectName>Company Name 1</ProjectName>
      <p className="text-12 margin-top-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="text-12 margin-none"><span className="text-green">Tecnologias:</span>: HTML5/CSS3/SASS/JAVASCRIPT/REACT/RUBY</p>
      <p className="text-12 margin-none"><span className="text-red">Nº de miembros:</span> 2/6 </p>
      <p className="text-12 margin-none"><span className="text-orange">Duración:</span> 3 meses (20/06/2017 - 20/09/2017)</p>
    </ProjectInfo>
  </ProjectContainer>
);

export default Project;