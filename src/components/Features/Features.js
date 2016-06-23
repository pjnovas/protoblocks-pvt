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
                La impresión 3D nos permite tener un diseño eficaz realizado enteramente
                por nosotros para poder cubrir las necesidades del mercado.
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconHolder}>
                <Icon name="shuffle" />
              </div>
              <h4>Versátil</h4>
              <div className={styles.body}>
                Podemos crear nuevos módulos rápidamente o mejorar los existentes
                en cualquier momento.
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.iconHolder}>
                <Icon name="cog-alt" />
              </div>
              <h4>Personalizado</h4>
              <div className={styles.body}>
                Tenemos la posibilidad de agregados y modificaciones en los módulos,
                como otro color ó agregar un logo para tu evento de forma sencilla.
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}
