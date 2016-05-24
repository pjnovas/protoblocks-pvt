import React, { Component, PropTypes } from 'react';
import Product from './Card';

export default class ProductItem extends Component {
  render() {
    const { product } = this.props;
    const styles = require('./Item.scss');

    return (
      <div className={styles.item}>
        <Product {...product}/>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    family: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};
