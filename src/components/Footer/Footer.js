import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const styles = require('./Footer.scss');

    return (
      <div className={styles.footer}>
        <div className={styles.wrap}>
          <h3>FOOTER</h3>
        </div>
      </div>
    );
  }
}
