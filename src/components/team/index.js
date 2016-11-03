import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

import ArbolSin from '../../img/arbolSin.png';
import ArbolCon from '../../img/arbolCon.png';

export default class Team extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      image: true,
    };
  }

  render() {
    console.log(this.state.image);
    return (
      <Col xs={12} style={styles.container}>
        {this.state.image ?
          <Image style={styles.image} src={ArbolSin} responsive onMouseEnter={() => this.setState({ image: !this.state.image })} responsive />
          :
          <Image style={styles.image} src={ArbolCon} onMouseLeave={() => this.setState({ image: !this.state.image })} responsive />
        }
      </Col>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
};
