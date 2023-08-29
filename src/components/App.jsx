import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
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
      <div
        style={{
          height: '100vh',
          margin: '0 auto',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title={'Please provide feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>

        {Object.values(this.state).some(e => e !== 0) ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'There is no feedback yet...'}></Notification>
        )}
      </div>
    );
  }
}
