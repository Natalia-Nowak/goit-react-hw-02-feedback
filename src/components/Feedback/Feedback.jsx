import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  increment = option => {
    if (option === 'Good') {
      this.setState(prevState => ({ good: prevState.good + 1 }));
    } else if (option === 'Neutral') {
      this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    } else if (option === 'Bad') {
      this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;

    if (sum === 0) {
      return '0%';
    }
    return (this.state.good / sum) * 100 + '%';
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions option={'Good'} onLeaveFeedback={this.increment} />
            <FeedbackOptions
              option={'Neutral'}
              onLeaveFeedback={this.increment}
            />
            <FeedbackOptions option={'Bad'} onLeaveFeedback={this.increment} />
          </div>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
