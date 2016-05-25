import React, { Component, PropTypes } from 'react';
import Icon from '../Icon/Icon';

export default class Hero extends Component {
  static propTypes = {
    onContinue: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./Hero.scss');

    return (
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.logo} />
          <p>Crea prototipos ordenadamente</p>
        </div>
        <div className={styles.continue}>
          <a onClick={ () => this.props.onContinue() }>
            <Icon name="down-open" />
          </a>
        </div>
      </div>
    );
  }
}
