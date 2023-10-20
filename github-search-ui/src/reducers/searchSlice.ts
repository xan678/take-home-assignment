import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState{
    query: string;
    entityType: 'user' | 'repository';
    results: any[] ;
    loading: boolean;
    error: string | null;
}


const initialState: SearchState = {
    query: '',
    entityType: 'user',
    results: [],
    loading: false,
    error: null
}


const searchSlice = createSlice({
    name : 'search',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        setEntityType: (state, action: PayloadAction<'user' | 'repository'>) => {
            state.entityType = action.payload;
        },
        setSearchResult: (state, action: PayloadAction< any >) => {
            state.results = action.payload;
        },
    }
})

export type { SearchState };
export const { setQuery, setEntityType, setSearchResult } = searchSlice.actions;
export default searchSlice.reducer;