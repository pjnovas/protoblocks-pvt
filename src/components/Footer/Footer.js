import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import Icon from '../Icon/Icon';

export default class Footer extends Component {
  static propTypes = {
    onGoTop: PropTypes.func.isRequired
  };

  render() {
    const styles = require('./Footer.scss');

    return (
      <div className={styles.footer}>
        <div className={styles.wrap}>
          <Logo className={styles.logo}/>
          <div className={styles.goTop}>
            <a onClick={ () => this.props.onGoTop() }>
              <Icon name="up-open" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
