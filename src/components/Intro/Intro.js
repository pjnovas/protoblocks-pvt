import React, { Component } from 'react';
import Icon from '../Icon/Icon';

export default class Intro extends Component {
  render() {
    const styles = require('./Intro.scss');

    return (
      <div className={styles.intro}>

        <div className={styles.wrap}>

          <div className={styles.item}>
            <h3>Crear prototipos de forma simple y eficaz</h3>
            <div className={styles.pics}>
              <div className={styles.img}>
                <div className={styles.arrow}>
                  <Icon name="right-fat" />
                </div>
              </div>
              <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod facilisis urna vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis imperdiet nulla lacus, ultrices rutrum est congue vitae.
            </div>
          </div>

          <div className={styles.item}>
            <h3>No importa el orden</h3>
            <div className={styles.pics}>
              <div className={styles.img}></div>
              <div className={styles.img}></div>
              <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod facilisis urna vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis imperdiet nulla lacus, ultrices rutrum est congue vitae.
            </div>
          </div>

          <div className={styles.item}>
            <h3>Agarralos a donde necesites</h3>
            <div className={styles.pics}>
              <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod facilisis urna vel luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Duis imperdiet nulla lacus, ultrices rutrum est congue vitae.
            </div>
          </div>

        </div>
      </div>
    );
  }
}
