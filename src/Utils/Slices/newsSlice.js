import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        query: "",
    },
    reducers: {
        addQuery: (state, action) => {
            console.log("listsssss",action.payload)
            state.query = action.payload;
        }

    }
});

export const { addQuery } = newsSlice.actions;
export default newsSlice.reducer;