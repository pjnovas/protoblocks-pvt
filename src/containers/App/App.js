import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from '../../config';
import ga from 'react-ga';

@connect(
  () => ({ }),
  {pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    pushState: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    ga.initialize(config.gaUA, { debug: !config.isProduction });
    ga.pageview(this.props.location.pathname);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      ga.pageview(nextProps.location.pathname);
    }
  }

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
