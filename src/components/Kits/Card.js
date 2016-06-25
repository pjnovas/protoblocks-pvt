import React, { Component, PropTypes } from 'react';

import Icon from '../Icon/Icon';
import Product from '../Products/Card';

export default class Kit extends Component {
  render() {
    const { title, products, link, showBuy } = this.props;
    const styles = require('./Card.scss');

    return (
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}
          { showBuy &&
            <a className={styles.buy} href={link} target="_blank">Comprar</a>
          }
        </h3>
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
  link: PropTypes.string,
  showBuy: PropTypes.bool,
  products: PropTypes.array
};
