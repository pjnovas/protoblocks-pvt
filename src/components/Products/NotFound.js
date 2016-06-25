import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';

export default class ProductNotFound extends Component {
  render() {
    const styles = require('./NotFound.scss');

    return (
      <div>
        <NavBar showClose/>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3 className={styles.name}>Ups!, no encontramos ese Módulo</h3>
            </div>
            <img src="/images/products/module_notfound.png" />
          </div>
        </div>
      </div>
    );
  }
}
