import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;

    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    const result = good + neutral + bad;

    return result;
  }

  countPositiveFeedbackPercentage() {
    const result = this.countTotalFeedback();
    const { good } = this.state;

    const percentage = (good * 100) / result;

    return Math.round(percentage);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const countPercentage = this.countPositiveFeedbackPercentage();

    const keys = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={this.handleClick} />

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPercentage}
          />
        )}
      </Section>
    );
  }
}
