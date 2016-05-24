import React, { Component, PropTypes } from 'react';

export default class Product extends Component {
  render() {
    const { id, family, title, kit } = this.props;
    const styles = require('./ProductCard.scss');

    let ctnStyles = styles.content + ' ' + styles[family];
    if (kit) {
      ctnStyles += ' ' + styles.kit;
    }

    return (
      <div className={ctnStyles}>

        <div className={styles.header}>
          <h3 className={styles.name}>{title}</h3>
        </div>

        <div className={styles.body}>
          <img src={`/images/products/${id.replace('-', '_')}_s.png`} />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  family: PropTypes.string,
  title: PropTypes.string,
  kit: PropTypes.bool
};
