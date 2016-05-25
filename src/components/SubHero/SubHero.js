import React, { Component } from 'react';

export default class SubHero extends Component {
  render() {
    const styles = require('./SubHero.scss');

    return (
      <div className={styles.subhero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2>Módulos</h2>
        </div>
      </div>
    );
  }
}
