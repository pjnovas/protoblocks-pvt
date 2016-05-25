import React, { Component, PropTypes } from 'react';
import Icon from '../Icon/Icon';
import Logo from '../Logo';
import { Link } from 'react-router';

export default class NavBar extends Component {
  static propTypes = {
    showClose: PropTypes.bool
  };

  render() {
    const { showClose } = this.props;
    const styles = require('./NavBar.scss');

    return (
      <div className={styles.navBar}>
        <div className={styles.container}>
          <Link to="/">
            <Logo className={styles.logo} />
          </Link>
          { showClose &&
            <Link className={styles.close} to="/modulos">
              <Icon name="cancel" />
            </Link>
          }
        </div>
      </div>
    );
  }
}
