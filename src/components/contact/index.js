import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, InputGroup } from 'react-bootstrap';
import FaUser from 'react-icons/lib/fa/user';
import { Colors } from '../../styles';

export default class Contact extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Col xs={12} mdOffset={2} md={8}>
          <h3 style={{ color: 'white', textAlign: 'center' }}>|CONTÁCTANOS|</h3>
        </Col>
        <Col smOffset={4} sm={4} xs={10} xsOffset={1} style={{ marginTop: 50 }}>
          <Form>
            <FormGroup controlId="formInlineName" >
              <ControlLabel style={{ color: 'white' }} >Nombre</ControlLabel>
              <FormControl type="text" style={styles.inputForm} />
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlineEmail">
              <ControlLabel style={{ color: 'white' }} >Email</ControlLabel>
              <FormControl type="email" style={styles.inputForm} />
            </FormGroup>
          </Form>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel style={{ color: 'white' }} >Comentario</ControlLabel>
            <FormControl componentClass="textarea" style={styles.inputComment} />
          </FormGroup>
        </Col>
        <Col xsOffset={2} xs={8} smOffset={6} sm={2}>
          <Button style={{ backgroundColor: '#a6d751', color: 'white' }} block>Enviar</Button>
        </Col>
        <Col xs={12}>
          <p style={{ color: Colors.DISABLED, fontSize: 12, textAlign: 'center', marginTop: 50 }}>*Proximamente disponible*</p>
        </Col>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Colors.CONTACTOS,
    // minHeight: '100vh',
  },
  inputComment: {
    backgroundColor: Colors.FORMULARIO,
    color: 'white',
    border: Colors.FOOTER,
    height: 180,
  },
  inputForm: {
    backgroundColor: Colors.FORMULARIO,
    color: 'white',
    border: Colors.FOOTER,
  },
  buttonEnviar: {
    backgroundColor: Colors.BOTTONACEPTAR,
  },
};
