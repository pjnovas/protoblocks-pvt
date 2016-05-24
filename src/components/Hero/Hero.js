import React, { Component } from 'react';
import Icon from '../Icon/Icon';

export default class Hero extends Component {
  render() {
    const styles = require('./Hero.scss');

    return (
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.logo} />
          <p>Crea prototipos ordenadamente</p>
        </div>
        <div className={styles.continue}>
          <a>
            <Icon name="down-open" />
          </a>
        </div>
      </div>
    );
  }
}
