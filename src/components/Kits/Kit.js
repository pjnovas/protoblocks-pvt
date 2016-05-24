import React, { Component, PropTypes } from 'react';

import Icon from '../Icon/Icon';
import Product from '../Products/Product';

export default class Kit extends Component {
  render() {
    const { title, products } = this.props;
    const styles = require('./Kit.scss');

    return (
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.products}>
          {products.map(p => {
            return (
              <div key={p.id} className={styles.product}>
                <Product {...p} kit />
                <div className={styles.plus}>
                  <Icon name="plus" />
                </div>
                { p.quantity > 1 &&
                  <div className={styles.qty}>{'x' + p.quantity}</div>
                }
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Kit.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  products: PropTypes.array
};
