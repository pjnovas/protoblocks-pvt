import React, { Component, PropTypes } from 'react';
import { initialize } from 'redux-form';
import { connect } from 'react-redux';

import {
  Contact
} from '../../components';

@connect(() => ({}), { initialize })
export default class Kits extends Component {
  static propTypes = {
    initialize: PropTypes.func.isRequired
  };

  state = {
    sent: false,
    sender: ''
  };

  handleSuccess(data) {
    this.props.initialize('contact', {});
    this.setState({ sent: true, sender: data.name });
  }

  handleInitialize = () => {
    this.props.initialize('contact', {
      name: '',
      email: '',
      text: ''
    });
  }

  render() {
    return (
      <div>
        <Contact {...this.state} onSuccess={data => this.handleSuccess(data)}/>
      </div>
    );
  }
}
