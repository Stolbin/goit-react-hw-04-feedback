import React, { Component } from 'react';
import SectionTitle from 'components/SectionTitle';
import ButtonList from 'components/ButtonList';
import CountList from 'components/CountList';
import { Container, NotificationMessage } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const { value } = event.target;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value);

  countPercentagePositiveFeedback = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPercentagePositiveFeedback();
    return (
      <Container>
        <SectionTitle title="Please leave yor feedback">
          <ButtonList
            elemets={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          {total ? (
            <CountList
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <NotificationMessage>There is no feedback</NotificationMessage>
          )}
        </SectionTitle>
      </Container>
    );
  }
}

export default App;
