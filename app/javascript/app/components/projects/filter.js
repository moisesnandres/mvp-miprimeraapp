import React from 'react';
import glamorous from 'glamorous';
import {
  Row,
  Col,
  FormControl
} from 'react-bootstrap';

const FilterContainer = glamorous.div({
  padding: '20px 10px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  margin: '20px 0'
});

const Filter = (props) => (
  <FilterContainer>
    <Row>
      <Col md={3}>
        <input
          className="form-control"
          type="text"
          placeholder="Buscar project"
          onChange={ (e) => props.handleChangeText(e.target.value) }
        />
      </Col>
      <Col md={3}>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Buscar por etapa</option>
          <option value="other">En reclutamiento</option>
          <option value="other">En ejecución</option>
          <option value="other">Completado</option>
        </FormControl>
      </Col>
      <Col md={3}>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Buscar empresa</option>
          <option value="other">Empresa 1</option>
          <option value="other">Empresa 2</option>
          <option value="other">Empresa 3</option>
          <option value="other">Empresa 4</option>
          <option value="other">Empresa 5</option>
          <option value="other">Empresa 6</option>
        </FormControl>
      </Col>
      <Col md={3}>
        <FormControl componentClass="select" placeholder="select">
          <option value="select">Buscar por puesto</option>
          <option value="other">Ux-UI</option>
          <option value="other">Front-end</option>
          <option value="other">Back-end</option>
          <option value="other">Project-Manager</option>
          <option value="other">Community Manager</option>
        </FormControl>
      </Col>
    </Row>
  </FilterContainer>
);

export default Filter;