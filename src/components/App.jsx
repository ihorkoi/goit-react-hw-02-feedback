import { FeedbackOptions } from './Feedback/FeedbackOptions';
export const App = () => {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackOptions></FeedbackOptions>
    </div>
  );
};
