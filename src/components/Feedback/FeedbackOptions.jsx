import { Component } from 'react';
import { Option, List } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <List>
        {Object.keys(options).map(value => {
          return (
            <li key={value}>
              <Option type="button" onClick={onLeaveFeedback} value={value}>
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Option>
            </li>
          );
        })}
      </List>
    );
  }
}
