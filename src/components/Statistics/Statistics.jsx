import { Component } from 'react';

export class Statistics extends Component {
  //   state = {
  //     total: 0,
  //     ...this.props,
  //   };
  //   countTotalFeedback = () => {
  //     console.log(this.state);
  //     this.setState(state => {
  //       return {
  //         total: state.stats.good + state.stats.bad + state.stats.neutral,
  //       };
  //     });
  //   };
  render() {
    return (
      <ul>
        {Object.keys(this.props).map(value => {
          if (value === 'positivePercentage') {
            return (
              <li key={'positivePercentage'}>
                <p>
                  Positive Feedback:
                  <span> {this.props[value].toFixed(0)} %</span>
                </p>
              </li>
            );
          }
          return (
            <li key={value}>
              <p>
                {value.charAt(0).toUpperCase() + value.slice(1)}:
                <span> {this.props[value]}</span>
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}
