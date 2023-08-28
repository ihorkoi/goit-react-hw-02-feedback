import { Component } from 'react';
export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addRespond = evt => {
    this.setState(state => {
      console.log('call');
      return (state[evt.target.value] += 1);
    });
  };
  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <h1>Please provide feedback</h1>
        <div>
          <button type="button" onClick={this.addRespond} value={'good'}>
            Good
          </button>
          <button type="button" onClick={this.addRespond} value={'neutral'}>
            Neutral
          </button>
          <button type="button" onClick={this.addRespond} value={'bad'}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <p>
          Good:
          <span> {good}</span>
        </p>
        <p>
          Neutral:
          <span> {neutral}</span>
        </p>
        <p>
          Bad:
          <span> {bad}</span>
        </p>
      </div>
    );
  }
}
