import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptionssss } from 'components/Feedback/buttons';

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = evt => {
    this.setState(state => {
      return (state[evt.target.value] += 1);
    });
  };
  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }
  countPositiveFeedbackPercentage() {
    return this.state.good === 0
      ? 0
      : (this.state.good / this.countTotalFeedback()) * 100;
  }
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <h1>Please provide feedback</h1>
        <FeedbackOptionssss
          stats={this.state}
          onClick={this.addFeedback}
        ></FeedbackOptionssss>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}
