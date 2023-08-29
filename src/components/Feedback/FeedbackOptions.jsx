import { Component } from 'react';
import { Option } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul
        style={{
          display: 'flex',
          gap: 15,
        }}
      >
        {Object.keys(options).map(value => {
          return (
            <li key={value}>
              <Option type="button" onClick={onLeaveFeedback} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Option>
            </li>
          );
        })}
      </ul>
    );
  }
}
