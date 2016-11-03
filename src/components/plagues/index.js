import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import { Colors } from '../../styles';
import renderIf from 'render-if';

import Oriental from '../../img/oriental.png';
import Escama from '../../img/sanjos2e.png';
import Manzana from '../../img/manzana.png';
import Enrollador from '../../img/enrollador.png';

export default class Pricing extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      bicho: 1,
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Col xs={12} md={8} mdOffset={2}>
          <h3 style={styles.title}>--PLAGAS--</h3>
          {renderIf(this.state.bicho === 1)(
            <Col xs={12} style={styles.infoBar}>
              <Col xs={4}>
                <Image src={Manzana} responsive />
              </Col>
              <Col xs={8} >
                <h4 style={{ color: '#adc04b', fontSize: 22 }}>POLILLA DE LA MANZANA</h4>
                <p>
                Cydia Pomonella, es conocida comúnmente como Polilla del Manzano, la cual es considerada
                una de las plagas más comunes y perjudiciales en árboles como manzanos, perales, ciruelos,
                nogales, membrilleros entre otros.
                Se estima que las pérdidas de fruta en huertos sin programas específicos de control pueden
                superar el 40%. El principal problema a la hora de controlarla es el desconocimiento respecto del
                desarrollo y la biología de la plaga, lo que puede provocar que las medidas se apliquen en forma tardía
                y se vuelvan ineficientes. Por ello resulta clave conocer cuál es su evolución para así utilizar el método
                de control que resulte más eficiente.
                </p>
              </Col>
            </Col>
          )}
          {renderIf(this.state.bicho === 2)(
            <Col xs={12} style={styles.infoBar}>
              <Col xs={4}>
                <Image src={Enrollador} responsive />
              </Col>
              <Col xs={8} >
                <h4 style={{ color: '#adc04b', fontSize: 22 }}>ENROLLADOR DE FRUTALES</h4>
                <p>La especie Proeulia auraria, o enrollador de la hoja de los frutales, es una polilla nativa de Chile,
                muy polífaga, cuyos estados larvarios afectan varios frutales en el país, especialmente a arandanos.
                Esta especie tiene enorme importancia como plaga cuarentenaria para mercados tales como EE.UU, México,
                Japón y Canadá, países en que genera rechazos en envíos de fruta.
                Esta situación obliga a los productores a fumigar la fruta en post cosecha y/o a controlar esta plaga en los campos.
                </p>
              </Col>
            </Col>
          )}
          {renderIf(this.state.bicho === 3)(
            <Col xs={12} style={styles.infoBar}>
              <Col xs={4}>
                <Image src={Escama} responsive />
              </Col>
              <Col xs={8} >
                <h4 style={{ color: '#adc04b', fontSize: 22 }}>ESCAMA DE SAN JOSE</h4>
                <p>La polilla oriental de la fruta, es una plaga cuarentenaria para los mercados de México y Colombia.
                En general, las mayores pérdidas se producen en las variedades de cosecha tardía, a partir del mes de febrero
                en la zona Central de Chile, donde los daños, especialmente en durazno destinado a la industria, pueden superar
                el 70%. C. molesta inverna como larva a completo desarrollo en diapausa y durante la temporada puede completar
                hasta cinco generaciones, de acuerdo a las especies frutícolas y a las variedades involucradas.
                </p>
              </Col>
            </Col>
          )}
          {renderIf(this.state.bicho === 4)(
            <Col xs={12} style={styles.infoBar}>
              <Col xs={4}>
                <Image src={Oriental} responsive />
              </Col>
              <Col xs={8} >
                <h4 style={{ color: '#adc04b', fontSize: 22 }}>POLILLA ORIENTAL</h4>
                <p>La escama de San José, es un insecto originaro de China que ataca a una gran variedad de árboles frutales,
                entre ellos, duraznero, cerezo, ciruelo damasco, manzano, peral, etc. Es necesario combatirla en todas las temporadas
                para evitar el daño al árbol y la infestación de la fruta.
                A ello se suma que la fruta de exportación esta afecta a medidas cuarentenanas por parte de la Comunidad Económica Europea que admite
                un nivel cero de infestación en el fruto Por esta razón, el agricultor no puede despreocuparse de la plaga y debe realizar en forma
                periódica un examen minucioso del huerto .
                </p>
              </Col>
            </Col>
          )}
          <Col xs={3} style={this.state.bicho === 1 ? styles.padActive : styles.padInactive} />
          <Col xs={3} style={this.state.bicho === 2 ? styles.padActive : styles.padInactive} />
          <Col xs={3} style={this.state.bicho === 3 ? styles.padActive : styles.padInactive} />
          <Col xs={3} style={this.state.bicho === 4 ? styles.padActive : styles.padInactive} />
          <Col xs={3} style={this.state.bicho === 1 ? styles.active : styles.inactive} onMouseEnter={() => this.setState({ bicho: 1 })}>
            <Col xsOffset={4} xs={4}>
              <Image src={Manzana} responsive />
            </Col>
            <Col xs={12}>
              <h4 style={{ color: this.state.bicho === 1 ? '#adc04b' : Colors.NAVBAR, fontSize: 14, textAlign: 'center' }}>POLILLA DE LA MANZANA</h4>
            </Col>
          </Col>
          <Col xs={3} style={this.state.bicho === 2 ? styles.active : styles.inactive} onMouseEnter={() => this.setState({ bicho: 2 })} >
            <Col xsOffset={4} xs={4}>
              <Image src={Enrollador} responsive />
            </Col>
            <Col xs={12}>
              <h4 style={{ color: this.state.bicho === 2 ? '#adc04b' : Colors.NAVBAR, fontSize: 14, textAlign: 'center' }}>ENROLLADOR DE FRUTALES</h4>
            </Col>
          </Col>
          <Col xs={3} style={this.state.bicho === 3 ? styles.active : styles.inactive} onMouseEnter={() => this.setState({ bicho: 3 })} >
            <Col xsOffset={4} xs={4}>
              <Image src={Escama} responsive />
            </Col>
            <Col xs={12}>
              <h4 style={{ color: this.state.bicho === 3 ? '#adc04b' : Colors.NAVBAR, fontSize: 14, textAlign: 'center' }}>ESCAMA DE SAN JOSE</h4>
            </Col>
          </Col>
          <Col xs={3} style={this.state.bicho === 4 ? styles.active : styles.inactive} onMouseEnter={() => this.setState({ bicho: 4 })} >
            <Col xsOffset={4} xs={4}>
              <Image src={Oriental} responsive />
            </Col>
            <Col xs={12}>
              <h4 style={{ color: this.state.bicho === 4 ? '#adc04b' : Colors.NAVBAR, fontSize: 14, textAlign: 'center' }}>POLILLA ORIENTAL</h4>
            </Col>
          </Col>
        </Col>
        <Col xs={12}>
          <p style={{ color: Colors.DISABLED, fontSize: 12, textAlign: 'center', marginTop: 100 }}>*Plagas en periodo de investigación*</p>
        </Col>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Colors.PLAGAS,
  },
  infoBar: {
    backgroundColor: '#5d5c6c',
    color: '#d2d2dd',
    padding: 15,
  },
  active: {
    backgroundColor: '#5d5c6c',
    color: '#43424d',
    padding: 5,
  },
  inactive: {
    backgroundColor: '#d2d2dd',
    color: '#43424d',
    padding: 5,
  },
  title: {
    color: Colors.APP,
    textAlign: 'center',
    marginBottom: 120,
  },
  padActive: {
    backgroundColor: '#adc04b',
    padding: 5,
  },
  padInactive: {
    backgroundColor: '#43424d',
    padding: 5,
  },
};
