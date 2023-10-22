import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    suggested: {},
    visible: true,
  },
  reducers: {
    cacheResult: (state, action) => {
      state = Object.assign(state.suggested, action.payload);
    },
    isVisible: (state, action) => {
      state.visible = action.payload;
    }
  },
});

export const { cacheResult, isVisible } = suggestionSlice.actions;
export default suggestionSlice.reducer;
