import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
