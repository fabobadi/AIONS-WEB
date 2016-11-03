import React, { Component, PropTypes } from 'react';
import '../../styles.css';


export default class Button extends Component {

  static get propTypes() {
    return {
      title: PropTypes.any,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 style={{ fontSize: 14 }}>
          {this.props.title}
        </h2>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 10,
  },
};
