import styled from '@emotion/styled';

export const Section = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: baseline;
  gap: 5px;
  margin: 15px 5px 25px 5px;
  @media (min-width: 768px) {
    gap: 10px;
    margin: 25px 10px 35px 10px;
  }
`;
export const ListItem = styled.li``;
export const Button = styled.button`
  width: 90px;
  height: 30px;
  padding: 5px 10px 10px 10px;
  text-alight: center;
  background: #bbd3bb;
  border-radius: 5px;
  border: 1px solid #b4b6b2;
  color: #2F4F4F;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 16px 20px rgba(86, 86, 86, 0.25);
  transition: scale 650ms ease, background 650ms ease, color 650ms ease, box-shadow 650ms ease;
   @media (min-width: 768px) {
    width: 140px;
    height: 40px;
      padding: 5px 20px;
  background: #bbd3bb;
  border-radius: 5px;
  border: 1px solid #b4b6b2;
  color: #2F4F4F;
  font-size: 20px;
  font-weight: 600;
  }
  &:hover {
    scale: 1.04;
    color: black;
    background: #8cb38c;
    box-shadow: 0px 16px 30px rgba(86, 86, 86, 0.4);
    transition: scale 650ms ease, background 650ms ease, color 650ms ease, box-shadow 650ms ease;
  };
  &::first-letter {
    text-transform: uppercase;
`;
