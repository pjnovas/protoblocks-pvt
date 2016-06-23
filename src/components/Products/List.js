import React, { Component, PropTypes } from 'react';

export default class ProductsList extends Component {
  render() {
    const styles = require('./List.scss');

    return (
      <div className={styles.products}>
        <div className={styles.wrap}>
          <p className={styles.productsIntro}></p>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  children: PropTypes.node
};
