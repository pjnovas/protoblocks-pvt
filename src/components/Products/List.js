import React, { Component, PropTypes } from 'react';

export default class ProductsList extends Component {
  render() {
    const styles = require('./List.scss');

    return (
      <div className={styles.products}>
        <div className={styles.wrap}>
          <p className={styles.productsIntro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum euismod facilisis urna vel luctus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  children: PropTypes.node
};
