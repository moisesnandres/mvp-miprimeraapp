import React, { Component } from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Label,
  Grid,
  Col,
  Row,
  FormControl,
  Button,
  Image
} from 'react-bootstrap';


import {
  setProjects
} from '../../actions/'

const ProjectWrapper = glamorous.div({
  width: '100%',
  padding: '30px',
  backgroundColor: '#fff'
});

const ProjectInformation = glamorous.div({
  backgroundColor: 'rgba(236, 240, 241, 0.5)',
  margin: '20px 0',
  padding: '30px 20px'
});

export class ProjectShow extends Component {

  state = {
    subscribe: false
  }

  handleClick = () => this.setState({subscribe: true});

  componentDidMount() {
    axios.get('/api/v1/projects/index')
      .then(response => {
        console.log('projects response', response);
        this.props.dispatch(setProjects(response.data.projects))
      });
  }

  render() {
    const { projects } = this.props;
    console.log('projects show', this.props);
    if (!projects) {
      return (<h1>Cargando...</h1>)
    };
    const project = projects.filter( p => p.id == this.props.match.params.id)['0'];
    console.log('projectshow', project);
    return (
      <ProjectWrapper>
        <Grid>
          <Row>
            <Col md={9}>
              <Row>
                <Col md={12}>
                  <h3 className="text-midnight">{project.name}</h3>
                  <h5>{project.company.name}</h5>
                </Col>
                <Col md={12}>
                  <div>
                    <Label bsStyle="info">Diseño web</Label>&nbsp;
                    <Label bsStyle="info">Diseño grafico</Label>&nbsp;
                    <small>Posteado hace 12 horas</small>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={3}>
                  <div className="text-bold margin-top-15">Horario</div>
                  <small>10 horas a la semana</small>
                </Col>
                <Col md={3}>
                  <div className="text-bold margin-top-15">Nivel</div>
                  <small>Principiante</small>
                </Col>
              </Row>
              <ProjectInformation className="text-cp">
                <div className="text-bold margin-bottom-20">Detalles:</div>
                <Row>
                  <Col className="text-12" md={2}>Resumen</Col>
                  <Col md={10}>
                    <p className="text-12">
                      { project.description }
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-12" md={2}>Skills necesarios</Col>
                  <Col md={10}>
                    <p className="text-12">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col md={2} className="text-12">Equipo requerido</Col>
                  <Col md={10}>
                    <ol className="text-12">
                      <li>Project Manager</li>
                      <li>Diseñador UX/UI</li>
                      <li>Desarrolladores front-end</li>
                    </ol>
                  </Col>
                </Row>
              </ProjectInformation>
            </Col>
            <Col md={3}>
                {
                  !this.state.subscribe ?
                  (
                    <Row>
                      <label>Unirme como:</label>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">Project Manager</option>
                        <option value="other">Diseñador UX/UI</option>
                        <option value="other">Desarrollador front-end</option>
                      </FormControl>
                      <div className="padding-topBottom-10 text-center">
                        <Button bsStyle="success"
                          block
                          onClick={this.handleClick}
                        >
                          Unirme al equipo
                        </Button>
                      </div>
                    </Row>
                  ) :
                  (
                    <Row className="text-center text-red">
                      <h4 className="confirm">Esperando confirmación</h4>
                    </Row>
                  )
                }
              <Row>
                <div className="text-bold">Acerca de la institución</div>
                <div className="text-12 text-bold">Ubicación</div>
                <p className="text-12"> Ica, Perú</p>
                <div className="text-12 text-bold">Sector</div>
                <p className="text-12">Educación</p>
              </Row>
              <Row>
                <div className="text-bold">Acerca del projecto:</div>
                <div className="text-12 text-bold">Equipo:</div>
                <p className="text-12">
                  <span className="text-bold">0</span> de <span className="text-bold">1</span> diseñador ux/ui inscritos
                </p>
                <p className="text-12">
                  <span className="text-bold">1</span> de <span className="text-bold">2</span> front-ends inscritos
                </p>
                <Image className="width-40" circle src="http://lorempixel.com/output/business-q-c-200-200-10.jpg"/>
                <Image className="width-40" circle src="http://lorempixel.com/output/business-q-c-200-200-10.jpg"/>
                <Image className="width-40" circle src="http://lorempixel.com/output/business-q-c-200-200-10.jpg"/>
                <br />
                <small>
                  * El proyecto iniciará cuando se completen todos los
                </small>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <h3 className="text-bold">Propuestas similares:</h3>
              <Link to="/project/1">Projecto X</Link><br/>
              <Link to="/project/2">Projecto Y</Link><br/>
              <Link to="/project/3">Projecto Z</Link><br/>
            </Col>
          </Row>
        </Grid>
      </ProjectWrapper>
    )
  }
}

const mapStateToProps = (state) => ({ projects: state.projects.all });

export default connect(mapStateToProps)(ProjectShow);