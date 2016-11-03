import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Colors } from '../../styles';

export default class Pricing extends Component {

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
          <h3 style={{ color: Colors.CONTACTOS, textAlign: 'center' }}>=SUSCRIPCIONES=</h3>
        </Col>
        <Col xs={12} smOffset={2} sm={10}>
          <Col xs={12} sm={3} >
            <p style={styles.title} >BASICO</p>
            <div style={styles.info}>
              <p>
                Medición de Temperatura
              </p>
              <p>
                Medición de Humedad
              </p>
              <p>
                Estado de equipo
              </p>
              <p>
                -
              </p>
              <p>
                -
              </p>
              <p>
                -
              </p>
              <p>
                -
              </p>
              <hr />
              <p>
                $ Precio por definir $
              </p>
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <p style={styles.title} >AVANZADO</p>
            <div style={styles.info}>
              <p>
                Medición de Temperatura
              </p>
              <p>
                Medición de Humedad
              </p>
              <p>
                Estado de equipo
              </p>
              <p>
                Modelos Días Horas
              </p>
              <p>
                Modelo de Helada
              </p>
              <p>
                -
              </p>
              <p>
                -
              </p>
              <hr />
              <p>
                $ Precio por definir $
              </p>
            </div>
          </Col>
          <Col xs={12} sm={3}>
            <p style={styles.title} >EXPERTO</p>
            <div style={styles.info}>
              <p>
                Medición de Temperatura
              </p>
              <p>
                Medición de Humedad
              </p>
              <p>
                Estado de equipo
              </p>
              <p>
                Modelos Días Horas
              </p>
              <p>
                Modelo de Helada
              </p>
              <p>
                Información de agroquimicos
              </p>
              <p>
                Información de pestes
              </p>
              <hr />
              <p>
                $ Precio por definir $
              </p>
            </div>
          </Col>
        </Col>
        <Col xs={12}>
          <p style={{ color: Colors.DISABLED, fontSize: 12, marginTop: 20 }}>* Los suscripciones no son los definitivas y estan sujetas a cambios*</p>
        </Col>
      </div>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    backgroundColor: Colors.NAVBAR,
    padding: 20,
    fontSize: 25,
    color: '#D3D3D3',
    marginTop: 40,
  },
  info: {
    backgroundColor: Colors.APP,
    padding: 20,
  }
};
