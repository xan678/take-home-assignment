import React from 'react';
import * as Styled from './styles';

interface RepoCardProps {
  data: {
    name: string;
    html_url: string;
    stargazers_count: number;
    // ... other repo data
  };
}

const RepoCard: React.FC<RepoCardProps> = ({ data }) => {
  return (
    <Styled.Card>
      <Styled.RepoName href={data.html_url}>{data.name}</Styled.RepoName>
      <Styled.Stars>Stars: {data.stargazers_count}</Styled.Stars>
      {/* Other repo data can be added here */}
    </Styled.Card>
  );
};

export default RepoCard;