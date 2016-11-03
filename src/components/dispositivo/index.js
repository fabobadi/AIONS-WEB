import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Colors } from '../../styles';
import FaClock from 'react-icons/lib/fa/clock-o';
import FaCubes from 'react-icons/lib/fa/cubes';
import FaBug from 'react-icons/lib/fa/bug';
import FaAreaChart from 'react-icons/lib/fa/area-chart';
import FaSunO from 'react-icons/lib/fa/sun-o';
import FaTencentWeibo from 'react-icons/lib/fa/tencent-weibo';
import FaFeed from 'react-icons/lib/fa/feed';
import MdSpa from 'react-icons/lib/md/spa';

import App from '../../img/app1.png';

export default class Caracteristicas extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      solar: true,
      conexion: true,
      sensores: true,
      campo: true,
      datos: true,
      modelos: true,
      estado: true,
      plagas: true,
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Col xs={12} style={styles.dispositivo}>
          <Col xs={12} mdOffset={2} md={8}>
            <h3 style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>/DISPOSITIVO/</h3>
          </Col>
          <Col xs={12} mdOffset={2} md={5} style={styles.context}>
            <Col md={6}>
              <div>
                <hr />
                <h4 style={styles.title}>
                  <FaSunO size={30} style={{ marginRight: 10 }} />
                  PANEL SOLAR
                </h4>
                <hr />
                <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                  AIONS, es un emprendimiento con conciencia medioambiental, por lo que hemos optado por un sistema energético verde. Además,
                  con esta iniciativa no será necesario que estés pendiente de conectar tu dispositivo a la corriente.
                </p>
              </div>
              <div>
                <hr />
                <h4 style={styles.title}>
                  <FaTencentWeibo size={30} style={{ marginRight: 10 }} />
                  SENSORES PRECISOS
                </h4>
                <hr />
                <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                  El dispositivo AIONS, cuenta con un conjunto de sofisticados sensores para obtener los parámetros claves para tu campo.
                  Los cuales luego, serán utilizados en nuestro sistema en la nube para que obtengas la mejor estimación de los modelos de
                  predicción de plagas.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <hr />
                <h4 style={styles.title}>
                  <FaFeed size={30} style={{ marginRight: 10 }} />
                  CONEXIÓN VIA CHIP
                </h4>
                <hr />
                <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                  El dispositivo se conecta a través de un chip de datos, que permite la conexión en cualquier lugar con señal telefónica.
                  Esto permite que los campos sin internet wi-fi, puedan utilizar el dispositivo AIONS donde ellos estimen conveniente.
                </p>
              </div>
              <div>
                <hr />
                <h4 style={styles.title}>
                  <MdSpa size={30} style={{ marginRight: 10 }} />
                  INSTÁLALO EN TU CAMPO
                </h4>
                <hr />
                <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                  Nuestros dispositivos están fabricados de forma tal de que sean ubicados en el mejor lugar de tu campo para hacer su
                  medición y así mantener la información específica del lugar que desees. Además, al ser un equipo pequeño y práctico,
                  puedes cambiar su posición, sin la necesidad de solicitar asistencia.
                </p>
              </div>
            </Col>
          </Col>
          <Col sm={3}>
            <Image src="http://www.controlliving.nl/wp-content/uploads/2015/04/PHL-DWMLT-PSM02-2.png" responsive />
          </Col>
          <Col xs={12}>
            <p style={{ color: Colors.DISABLED, fontSize: 12, textAlign: 'center', marginTop: 50 }}>* Los servicios e imagenes no son las definitivos y estan sujetas a cambios *</p>
          </Col>
        </Col>
      </div>
    );
  }
}

const styles = {
  context: {
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    alignItems: 'center',
  },
};
