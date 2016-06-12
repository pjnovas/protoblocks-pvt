import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Icon from '../Icon/Icon';

export default class Contact extends Component {

  onSubmit(data) {
    console.dir(data);
  }

  render() {
    const styles = require('./Contact.scss');

    return (
      <div className={styles.contact}>

        <div className={styles.wrap}>
          <h3>Contacto</h3>
          <div className={styles.side + ' ' + styles.info}>
            <div className={styles.iconHolder}>
              <Icon name="chat" />
            </div>
            <p>
            Tu opinión nos ayuda a mejorar. Utilizá este formulario para
            contactarnos por lo que necesites, desde dejarnos tu opinión
            hasta hacer una consulta o pedido.
            </p>
          </div>
          <div className={styles.side}>
            <ContactForm onSubmit={ data => this.onSubmit(data) } />
          </div>
        </div>
      </div>
    );
  }
}
