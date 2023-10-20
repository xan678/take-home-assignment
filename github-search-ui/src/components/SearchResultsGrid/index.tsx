import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from '../UserCard';
import RepoCard from '../RepoCard';
import * as Styled from './styles';

const SearchResultsGrid : React.FC = () => {
  let results = useSelector((state : any) => state.search.results.items);
  const entityType = useSelector((state: any) => state.search.entityType);

  if(!results) results = []

  console.log(results, entityType)
  return (
    <Styled.Grid>
      {results.map((item: any, index : any) => 
        entityType === 'user' 
          ? <UserCard key={index} data={item} /> 
          : <RepoCard key={index} data={item} />
      )}
    </Styled.Grid>
  );
};

export default SearchResultsGrid;
