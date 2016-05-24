import React, { Component } from 'react';
import Icon from '../Icon/Icon';

export default class Features extends Component {
  render() {
    const styles = require('./Features.scss');

    return (
      <div className={styles.features}>

        <div className={styles.wrap}>
          <h3>Creados con Impresión 3D</h3>

          <div className={styles.items}>

            <div className={styles.item}>
              <div className={styles.iconHolder}>
                <Icon name="cc-by" />
              </div>
              <h4>Diseño Propio</h4>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod facilisis urna vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis imperdiet nulla lacus, ultrices rutrum est congue vitae.
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconHolder}>
                <Icon name="shuffle" />
              </div>
              <h4>Versatilidad</h4>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod facilisis urna vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis imperdiet nulla lacus, ultrices rutrum est congue vitae.
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconHolder}>
                <Icon name="cog-alt" />
              </div>
              <h4>Personalización</h4>
              <div className={styles.body}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum euismod facilisis urna vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis imperdiet nulla lacus, ultrices rutrum est congue vitae.
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
