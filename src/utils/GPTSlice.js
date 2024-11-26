import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name : "GPT",
    initialState : {
        showGptSearch : false,
        gptMoviesResult : null
    },
    reducers : {
        toggleGptSearchView : (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult : (state,action) => {
            state.gptMoviesResult = action.payload
        }
    }
});

export const {toggleGptSearchView, addGptMovieResult} = GPTSlice.actions;
export default GPTSlice.reducer;