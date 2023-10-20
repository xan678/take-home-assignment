import React, { useEffect,  useState  } from 'react';
import { useDispatch, useSelector,} from 'react-redux';
import { setQuery, setEntityType, setSearchResult } from '../../reducers/searchSlice';
import { searchUser, searchRepo } from '../../api';
import debounce from "lodash/debounce"
import * as Styled from './styles';

const Search = () => {
  const [value, setValue] = useState<string>("")
  const dispatch = useDispatch();
  const query = useSelector((state : any) => state.search.query);
  const entityType = useSelector((state: any) => state.search.entityType);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    dispatch(setQuery(e.target.value));

  };

  // Handle dropdown change
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const ans : any  = e.target.value
    dispatch(setEntityType(ans));
    dispatch(setSearchResult({}))
    dispatch(setQuery(""))
    setValue("")
  };

  // Debounce the search to optimize performance
  const debouncedSearch = debounce( async () => {
    if (query.length >= 3) {
      if (entityType === 'user') {
        searchUser(query).then((data) => {
          // Handle setting results in redux
          dispatch(setSearchResult(data))
        });
      } else {
        searchRepo(query).then((data) => {
          // Handle setting results in redux
          dispatch(setSearchResult(data))
        });
    }
   }
  }, 300);

  // Trigger the search whenever query or entityType changes
  useEffect(() => {
    debouncedSearch();
  }, [query, entityType]);

  return (
    <Styled.Container>
      <Styled.Input onChange={handleInputChange} value={value} placeholder='Start typing to search....' />
      <Styled.Dropdown onChange={handleDropdownChange}>
        <option value="user">User</option>
        <option value="repo">Repository</option>
      </Styled.Dropdown>
      {/* Render other components or results here */}
    </Styled.Container>
  );
};

export default Search;
