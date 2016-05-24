import React, { Component, PropTypes } from 'react';

export default class ProductView extends Component {
  render() {
    const { id, family, title } = this.props;
    const styles = require('./View.scss');
    const ctnStyles = styles.content + ' ' + styles[family];

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

ProductView.propTypes = {
  id: PropTypes.string,
  family: PropTypes.string,
  title: PropTypes.string
};
