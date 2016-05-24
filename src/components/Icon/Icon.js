import React, { PropTypes, Component } from 'react';

export default class Icon extends Component {

  render() {
    return (
      <i className={'icon ' + `icon-${this.props.name}`}></i>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};
