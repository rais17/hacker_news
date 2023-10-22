import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./Slices/newsSlice";
import suggestionSlice from "./Slices/suggestionSlice";

const store = configureStore({
  reducer: {
        news: newsSlice,
        suggestion: suggestionSlice
  },
});

export default store;