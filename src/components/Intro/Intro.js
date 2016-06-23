import React, { Component } from 'react';
import Icon from '../Icon/Icon';

export default class Intro extends Component {
  render() {
    const styles = require('./Intro.scss');

    return (
      <div className={styles.intro}>

        <div className={styles.wrap}>

          <div className={styles.item}>
            <h3>Crea prototipos ordenadamente</h3>
            <div className={styles.pics}>
              <div className={styles.img}>
                <div className={styles.arrow}>
                  <Icon name="right-fat" />
                </div>
              </div>
              <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
              Con ProtoBlocks ya no tenes que preocuparte por tener tus prototipos
              sueltos y desordenados. Cada módulo tiene un color para su rápida identificación,
              están pensados para la simplicidad y el orden.
            </div>
          </div>

          <div className={styles.item}>
            <h3>Disponelos como necesites</h3>
            <div className={styles.pics}>
              <div className={styles.img}></div>
              <div className={styles.img}></div>
              <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
              Todos los módulos cuentan con un sistema de encastre parecido a un puzzle,
              pensado para que puedas disponerlos de cualquier manera y en cualquier orden.
            </div>
          </div>

          <div className={styles.item}>
            <h3>Atornillalos a donde quieras</h3>
            <div className={styles.pics}>
              <div className={styles.img}></div>
            </div>
            <div className={styles.body}>
              Con orificios para poder atornillarlos a cualquier superficie.
              De esta forma podes tener prototipos funcionando por mucho mas tiempo
              sin preocuparte porque se muevan.
            </div>
          </div>

        </div>
      </div>
    );
  }
}
