import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
       
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration } = homeSlice.actions;

export default homeSlice.reducer;
