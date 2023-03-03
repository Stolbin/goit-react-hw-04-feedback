import PropTypes from 'prop-types';
import { Section, ListItem, Button } from './ButtonList.styled';

const ButtonList = ({ elemets, onLeaveFeedback }) => (
  <Section>
    {Object.keys(elemets).map(element => (
      <ListItem key={element}>
        <Button value={element} type="button" onClick={onLeaveFeedback}>
          {element}
        </Button>
      </ListItem>
    ))}
  </Section>
);

ButtonList.propTypes = {
  elemets: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default ButtonList;
