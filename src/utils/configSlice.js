import { createSlice } from "@reduxjs/toolkit";
export const configSlice = createSlice({
    name : "config",
    initialState: {
        lang : "en"
    },
    reducers : {
        changeLanguage : (state,action) => {
            state.lang = action.payload;
        }
    },
})

export const {changeLanguage} = configSlice.actions;

export default configSlice.reducer;