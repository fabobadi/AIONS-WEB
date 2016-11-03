import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import FaAngleDoubleDown from 'react-icons/lib/fa/angle-double-down';
import fbLogo from '../../img/botonfb.png';
import twLogo from '../../img/botontwitter.png';
import { Element, Link, animateScroll } from 'react-scroll';
import renderIf from 'render-if';
import { Colors } from '../../styles';

import Logo from '../../img/logohorfluerencie.png';
import Fondo from '../../img/fondoPricing.png';

import Button from './button.js';
import Home from '../home';
import Team from '../team';
import Pricing from '../pricing';
import App from '../app';
import Dispositivo from '../dispositivo';
import Contacto from '../contact';
import Plagas from '../plagues';

export default class NavbarWeb extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      navbarButton: false,
    };
  }


  render() {
    return (
      <div style={styles.container} containerWidth={this.state.containerWidth}>
        {renderIf(window.innerWidth > 1196)(
          <div style={styles.navbar}>
            <Col smOffset={2} sm={2}>
              <a onClick={() => animateScroll.scrollToTop()} style={{ cursor: 'pointer' }}>
                <img
                  src={Logo}
                  alt={'logo'}
                  height={40}
                  style={{ marginTop: 5 }}
                />
              </a>
            </Col>
            <Col sm={6} style={styles.titleNavbar}>
              <Link to="Team" spy smooth duration={1500} style={{ textDecoration: 'none' }} >
                <Button title="NOSOTROS" />
              </Link>
              <Link to="Caracteristicas" spy smooth duration={1500} style={{ textDecoration: 'none' }} >
                <Button title="APP" />
              </Link>
              <Link to="Plagas" spy smooth duration={1500} style={{ textDecoration: 'none' }} >
                <Button title="PLAGAS" />
              </Link>
              <Link to="SUSCRIPCIONES" spy smooth duration={1500} style={{ textDecoration: 'none' }} >
                <Button title="SUSCRIPCIONES" />
              </Link>
              <Link to="Contacto" spy smooth duration={1500} style={{ textDecoration: 'none' }} >
                <Button title="CONTACTO" />
              </Link>
            </Col>
          </div>
        )}
        {renderIf(window.innerWidth < 1196)(
          <div style={styles.navbar}>
            <Col xs={2}>
              <a onClick={() => animateScroll.scrollToTop()} style={{ cursor: 'pointer' }}>
                <img
                  src={Logo}
                  alt={'logo'}
                  height={40}
                  style={{ marginTop: 5 }}
                />
              </a>
            </Col>
            <Col sm={6} style={styles.titleNavbarXs}>
              <hr />
              <FaAngleDoubleDown size={50} color={'#96969B'} onClick={() => this.setState({ navbarButton: !this.state.navbarButton })} />
            </Col>
          </div>
          )}
        {renderIf(this.state.navbarButton)(
          <Col xsOffset={4} xs={8} style={styles.mobileButtons}>
            <Link activeClass="active" to="Caracteristicas" className="Caracteristicas" spy smooth duration={1500} style={{ textDecoration: 'none' }} onClick={() => this.setState({ navbarButton: !this.state.navbarButton })} >
              <h4 style={{ color: 'white', textAlign: 'center' }}>CARACTERISTICAS</h4>
            </Link>
            <Link activeClass="active" to="SUSCRIPCIONES" spy smooth duration={1500} style={{ textDecoration: 'none' }} onClick={() => this.setState({ navbarButton: !this.state.navbarButton })} >
              <h4 style={{ color: 'white', textAlign: 'center' }}>APP</h4>
            </Link>
            <Link activeClass="active" to="Team" spy smooth duration={1500} style={{ textDecoration: 'none' }} onClick={() => this.setState({ navbarButton: !this.state.navbarButton })} >
              <h4 style={{ color: 'white', textAlign: 'center' }}>NOSOTROS</h4>
            </Link>
            <Link activeClass="active" to="Plagas" spy smooth duration={1500} style={{ textDecoration: 'none' }} onClick={() => this.setState({ navbarButton: !this.state.navbarButton })} >
              <h4 style={{ color: 'white', textAlign: 'center' }}>PLAGAS</h4>
            </Link>
            <Link activeClass="active" to="Contacto" spy smooth duration={1500} style={{ textDecoration: 'none' }} onClick={() => this.setState({ navbarButton: !this.state.navbarButton })} >
              <h4 style={{ color: 'white', textAlign: 'center' }}>CONTACTO</h4>
            </Link>
          </Col>
        )}
        <div style={{ width: '100%' }}>
          <Element name="Home"> <Home /></Element>
          <Element name="Team"><Row style={{ margin: 0, paddingTop: 100, paddingBottom: 100, backgroundColor: Colors.EQUIPO }} ><Team /></Row></Element>
          <Element name="Caracteristicas"><Row style={{ margin: 0, paddingTop: 100, paddingBottom: 100, backgroundColor: Colors.APP }} ><App /></Row></Element>
          <Row style={{ margin: 0, paddingTop: 100, paddingBottom: 100, backgroundColor: Colors.DISPOSITIVO }} ><Dispositivo /></Row>
          <Element name="Plagas"><Row style={{ margin: 0, paddingTop: 100, paddingBottom: 100, backgroundColor: Colors.PLAGAS }} ><Plagas /></Row></Element>
          <Element name="SUSCRIPCIONES"><Row style={{ margin: 0, paddingTop: 100, paddingBottom: 100, backgroundImage: 'url(' + Fondo + ')', backgroundSize: 'cover' }} ><Pricing /></Row></Element>
          <Element name="Contacto"><Row style={{ margin: 0, paddingTop: 100, paddingBottom: 100, backgroundColor: Colors.CONTACTOS }} ><Contacto /></Row></Element>
        </div>
        {/* <Element name="Home"><Home /></Element>
        <Element name="Team"><Team /></Element>
        <Element name="Caracteristicas"><Caracteristicas /></Element>
        alala
        <Element name="Plagas"><Plagas /></Element>
        <Element name="SUSCRIPCIONES"><Pricing /></Element>
        <Element name="Contacto"><Contacto /></Element> */}
        <Col md={12} style={styles.footer}>
          <div>
            <p style={styles.copyright}>- Made by AIONS 2016 © -</p>
            <a href="https://www.facebook.com/aionschile">
              <img
                src={fbLogo}
                alt={'logo'}
                height="25"
                style={{ marginRight: 20 }}
              />
            </a>
            <img
              src={twLogo}
              alt={'logo'}
              height="25"
              style={{ marginRight: 20 }}
            />
            {/* <FaLinkedinSquare size={25} color={'#BEBEC0'} /> */}
          </div>
        </Col>
        <Col md={12} style={styles.footer}>
          <p style={styles.handmade}>- 100% Hecho a mano, no template -</p>
        </Col>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    overflowX: 'hidden',
  },
  navbar: {
    position: 'fixed',
    width: '100%',
    backgroundColor: Colors.NAVBAR,
    zIndex: 5,
    padding: 6,
  },
  titleNavbar: {
    display: 'flex',
    backgroundColor: Colors.NAVBAR,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleNavbarXs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'center',
    height: '100%',
  },
  mobileButtons: {
    backgroundColor: 'rgba(81,80,94,0.9)',
    position: 'fixed',
    zIndex: 5,
    marginTop: 62,
    justifyContent: 'flex-end',
  },
  navitems: {
    fontSize: 25,
    color: 'white',
  },
  footer: {
    display: 'flex',
    backgroundColor: Colors.FOOTER,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 5,
  },
  footeritems: {
    fontSize: 25,
    color: 'white',
  },
  copyright: {
    color: 'gray',
  },
  handmade: {
    color: 'gray',
    fontSize: 12,
  },
};
