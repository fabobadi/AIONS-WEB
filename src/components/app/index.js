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
      <div>
        <Col xs={12}>
          <h3 style={{ color: 'white', textAlign: 'center', marginBottom: 20 }}>~APP~</h3>
        </Col>
        <Col xs={12} md={3} mdOffset={2} style={{ textAlign: 'center' }} >
          <Image src={App} width={'60%'} role={'presentation'} />
        </Col>
        <Col xs={12} md={5} style={styles.context}>
          <Col md={6}>
            <div>
              <hr />
              <h4 style={styles.title}>
                <FaClock size={30} style={{ marginRight: 10 }} />
                  DATOS EN TIEMPO REAL
              </h4>
              <hr />
            </div>
            <div>
              <hr />
              <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                Obtén los datos obtenidos del dispositivo AIONS con sus indicadores al alcance de tu bolsillo.
                Nuestro sistema, cuenta con un servicio de almacenamiento en la nube, para que no tengas que
                preocuparte del almacenamiento de los datos.
              </p>
            </div>
            <div>
              <hr />
              <h4 style={styles.title}>
                <FaCubes size={30} style={{ marginRight: 10 }} />
                  ESTADO DE TU EQUIPO
              </h4>
              <hr />
              <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                Nuestro sistema, permite conocer el estado de tu dispositivo en cualquier momento.El estado de su conexión,
                posición o carga de batería desde tu aplicación. Así te aseguras que tu dispositivo sigue funcionando
                de forma correcta.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div>
              <hr />
              <h4 style={styles.title}>
                <FaAreaChart size={30} style={{ marginRight: 10 }} />
                MODELOS AGROMATEMÁTICOS
              </h4>
              <hr />
              <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                AIONS, funciona con un conjunto de modelos aprobados por instituciones agronómicas de alto nivel académico.
                Además, hemos mejorado y optimizado estos modelos para que tu aplicación sea lo mas cómoda de utilizar,
                sin descuidar la precisión.
              </p>
            </div>
            <div>
              <hr />
              <h4 style={styles.title}>
                <FaBug size={30} style={{ marginRight: 10 }} />
                PRONÓSTICO DE PLAGAS
              </h4>
              <hr />
              <p style={{ color: Colors.WHITE, textAlign: 'justify' }}>
                Con nuestro sistema de detección temprana de insectos, plagas y bacterias, esperamos que la utilización de agroquímicos
                en tu campo sea el óptimo. Se estima la aparición de plagas y se recomienda el uso específico de productos para su detención.
              </p>
            </div>
          </Col>
        </Col>
        <Col xs={12}>
          <p style={{ color: Colors.WHITE, fontSize: 12, textAlign: 'center', marginTop: 50 }}>* Los servicios e imagenes no son las definitivos y estan sujetas a cambios *</p>
        </Col>
      </div>
    );
  }
}

const styles = {
  container: {
    // minHeight: '100%',
  },
  app: {
    // minHeight: '100%',
  },
  dispositivo: {
    // minHeight: '100%',

  },
  context: {
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    alignItems: 'center',
  },
};
