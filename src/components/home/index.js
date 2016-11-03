import React, { Component } from 'react';
// import Slider from 'react-slick';
import UnderConstruction from '../../img/construccion.png';

export default class Home extends Component {

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
        <img src={UnderConstruction} width="100%" role="presentation" />
        {/* <Slider dots autoplay pauseOnHover>
          <div><img src='http://dailypano.yakohl.com/pic/wiesenpanorama_2952011.jpg' /></div>
          <div><img src='http://dailypano.yakohl.com/pic/wiesenpanorama_2952011.jpg' /></div>
          <div><img src='http://dailypano.yakohl.com/pic/wiesenpanorama_2952011.jpg' /></div>
        </Slider> */}
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: 60,
  },
};
