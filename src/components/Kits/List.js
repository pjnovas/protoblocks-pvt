import React, { Component, PropTypes } from 'react';

export default class KitsList extends Component {
  render() {
    const styles = require('./List.scss');

    return (
      <div className={styles.kits}>
        <div className={styles.wrap}>
          <p className={styles.intro}>
            Encontrá el kit que se adapte a tu próximo prototipo.
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
