import styled from '@emotion/styled';

export const CountListBox = styled.ul`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;
export const CountListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CountListItemTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-left: 10px;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
export const CountListItemValue = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-right: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
