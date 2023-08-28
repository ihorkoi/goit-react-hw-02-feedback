import { Component } from 'react';

export class FeedbackOptionssss extends Component {
  render() {
    const { stats, onClick } = this.props;
    return (
      <ul
        style={{
          display: 'flex',
          gap: 15,
        }}
      >
        {Object.keys(stats).map(value => {
          return (
            <li key={value}>
              <button type="button" onClick={onClick} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
