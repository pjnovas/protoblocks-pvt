import React, { PropTypes, Component } from 'react';

export default class Icon extends Component {

  render() {
    const styles = require('./Icon.scss');

    return (
      <i className={[styles.icon, styles[`icon-${this.props.name}`]]}></i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};
