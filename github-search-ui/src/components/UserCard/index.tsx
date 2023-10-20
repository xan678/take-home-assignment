

import React from 'react';
import * as Styled from './styles';

interface UserCardProps {
  data: {
    avatar_url: string;
    login: string;
    html_url: string;
    // ... other user data
  };
}

const UserCard: React.FC<UserCardProps> = ({ data }) => {
  return (
    <Styled.Card>
      <Styled.Avatar src={data.avatar_url} alt={data.login} />
      <Styled.UserName href={data.html_url}>{data.login}</Styled.UserName>
      {/* Other user data can be added here */}
    </Styled.Card>
  );
};

export default UserCard;