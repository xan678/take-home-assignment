import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  width:'300px';
  height:'300px';
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RepoName = styled.a`
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Stars = styled.span`
  font-size: 14px;
  color: #666;
`;