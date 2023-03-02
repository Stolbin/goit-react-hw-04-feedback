import PropTypes from 'prop-types';
import {
  CountListBox,
  CountListItem,
  CountListItemTitle,
  CountListItemValue,
} from './CountList.styled';

const CountList = ({ good, neutral, bad, total, positivePercentage }) => (
  <CountListBox>
    <CountListItem>
      <CountListItemTitle>Good:</CountListItemTitle>
      <CountListItemValue>{good}</CountListItemValue>
    </CountListItem>
    <CountListItem>
      <CountListItemTitle>Neutral:</CountListItemTitle>
      <CountListItemValue>{neutral}</CountListItemValue>
    </CountListItem>
    <CountListItem>
      <CountListItemTitle>Bad:</CountListItemTitle>
      <CountListItemValue>{bad}</CountListItemValue>
    </CountListItem>
    <CountListItem>
      <CountListItemTitle>Total:</CountListItemTitle>
      <CountListItemValue>{total}</CountListItemValue>
    </CountListItem>
    <CountListItem>
      <CountListItemTitle>Positive feedback:</CountListItemTitle>
      <CountListItemValue>{positivePercentage}%</CountListItemValue>
    </CountListItem>
  </CountListBox>
);

CountList.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default CountList;
