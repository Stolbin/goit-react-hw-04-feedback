import PropTypes from 'prop-types';
import { Section, ListItem, Button } from './ButtonList.styled';

const ButtonList = ({ elemets, onLeaveFeedback }) => (
  <Section>
    {elemets.map(element => (
      <ListItem key={element}>
        <Button value={element} type="button" onClick={onLeaveFeedback}>
          {element}
        </Button>
      </ListItem>
    ))}
  </Section>
);

ButtonList.propTypes = {
  elemets: PropTypes.array,
};
export default ButtonList;
