import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={() => this.props.onLeaveFeedback(this.props.option)}>
        {this.props.option}
      </button>
    );
  }
}
