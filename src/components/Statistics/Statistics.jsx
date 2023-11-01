import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage}</p>
      </div>
    );
  }
}
