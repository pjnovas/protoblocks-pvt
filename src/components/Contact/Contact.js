import React, { Component, PropTypes } from 'react';
import Icon from '../Icon/Icon';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import contactValidation from './contactValidation';
import * as contactActions from 'redux/modules/contact';

@connect(
  state => ({
    sendError: state.contact.sendError
  }),
  dispatch => bindActionCreators(contactActions, dispatch)
)
@reduxForm({
  form: 'contact',
  fields: ['name', 'email', 'text'],
  validate: contactValidation
})
export default class Contact extends Component {
  static propTypes = {
    active: PropTypes.string,
    send: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    sendError: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
    values: PropTypes.object.isRequired,

    sent: PropTypes.bool,
    sender: PropTypes.string
  };

  getForm(styles) {
    const {
      fields: { name, email, text },
      handleSubmit,
      send,
      onSuccess,
      values,
      sendError,
      submitting
    } = this.props;

    if (sendError) {
      return (
        <div className={styles.sendError}>
          <p>Tenemos problemas con el formulario.</p>
          <p>Por favor, contactanos por las redes sociales.</p>
          <p>Gracias.</p>
        </div>
      );
    }

    return (
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formBody}>
          <div className={styles.control}>
            <input type="text" placeholder="Nombre" {...name} />
            { name.error && name.touched && <span className={styles.fieldError}>{name.error}</span> }
          </div>

          <div className={styles.control}>
            <input type="email" placeholder="Email" {...email} />
            { email.error && email.touched && <span className={styles.fieldError}>{email.error}</span> }
          </div>

          <div className={styles.control}>
            <textarea {...text} placeholder="Consulta, opinión, pedido"/>
            { text.error && text.touched &&
              <span className={styles.fieldError + ' ' + styles.underlined}>{text.error}</span> }
          </div>
        </div>

        <div className={styles.buttons}>
          { submitting ?
            <a>
              <Icon name="ok" /> Enviando ...
            </a>
            :
            <a onClick={handleSubmit(() => send(values)
                .then(result => {
                  if (result && typeof result.error === 'object') {
                    return Promise.reject(result.error);
                  }

                  onSuccess(values);
                })
              )}>
              <Icon name="ok" /> Enviar
            </a>
          }
        </div>
      </form>
    );
  }

  getSuccess(styles) {
    const [name] = this.props.sender.split(' ');
    return (
      <div className={styles.thanks}>
        <p>Gracias por contactarnos <b>{name}</b>!</p>
        <p>Te responderemos vía email lo antes posible</p>
        <p>Saludos</p>
      </div>
    );
  }

  render() {
    const { sent } = this.props;
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
            Tu opinión nos ayuda a mejorar. Utiliza este formulario para
            contactarnos por lo que necesites, desde dejarnos tu opinión
            hasta hacer una consulta o pedido.
            </p>
          </div>

          <div className={styles.side}>
            { sent ? this.getSuccess(styles) : this.getForm(styles) }
          </div>

        </div>

      </div>
    );
  }
}
