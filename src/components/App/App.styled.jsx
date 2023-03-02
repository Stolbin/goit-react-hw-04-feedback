import styled from '@emotion/styled';

export const Container = styled.div`
  display: inline-block;
  position: absolute;
  margin-top: 20px;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background: #fffaf0;
  border: 2px solid #556b2f;
  border-radius: 10px;
  box-shadow: 10px 10px 30px 0px rgba(86, 86, 86, 0.5);
  @media (min-width: 768px) {
    margin-top: 70px;
    padding: 30px;
  }
`;

export const NotificationMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #b22222;
  margin-top: 20px;
  padding: 30px;
`;
