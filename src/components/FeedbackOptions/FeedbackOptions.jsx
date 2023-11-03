import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export default class FeedbackOptions extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="feedback-button"
        onClick={() => this.props.onLeaveFeedback(this.props.option)}
      >
        {this.props.option}
      </button>
    );
  }
}
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.string,
  option: PropTypes.string,
};
