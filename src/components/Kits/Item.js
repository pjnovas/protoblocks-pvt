import React, { Component, PropTypes } from 'react';
import Kit from './Card';

export default class KitItem extends Component {
  render() {
    const { kit } = this.props;
    const styles = require('./Item.scss');

    // TODO: Add button to Buy a Kit
    return (
      <div className={styles.item}>
        <Kit {...kit}/>
      </div>
    );
  }
}

KitItem.propTypes = {
  kit: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    products: PropTypes.array
  }).isRequired
};
