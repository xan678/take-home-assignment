import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.a`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;