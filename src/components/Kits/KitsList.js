import React, { Component, PropTypes } from 'react';

export default class KitsList extends Component {
  render() {
    const styles = require('./Kits.scss');

    return (
      <div className={styles.kits}>
        <div className={styles.wrap}>
          <p className={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum euismod facilisis urna vel luctus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className={styles.cards}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

KitsList.propTypes = {
  children: PropTypes.node
};
