import React, { PropTypes, Component } from 'react';
import Icon from '../Icon/Icon';

export default class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      text: ''
    };
  }

  render() {
    const styles = require('./ContactForm.scss');

    return (
      <form className={styles.contactForm}>

        <div className={styles.formBody}>
          <div className={styles.control}>
            <input type="text" placeholder="Nombre" value={this.state.name}
              onChange={ e => this.setState({ name: e.target.value })} />
          </div>

          <div className={styles.control}>
            <input type="email" placeholder="Email" value={this.state.email}
              onChange={ e => this.setState({ email: e.target.value })} />
          </div>

          <div className={styles.control}>
            <textarea value={this.state.text} placeholder="Consulta, opinión, pedido"
              onChange={ e => this.setState({ text: e.target.value })} />
          </div>

        </div>

        <div className={styles.buttons}>
          <a onClick={ () => this.props.onSubmit() }>
            <Icon name="ok" /> Enviar
          </a>
        </div>
      </form>
    );
  }

}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
