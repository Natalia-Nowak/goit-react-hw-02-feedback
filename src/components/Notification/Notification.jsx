import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Notification extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
