import { configureStore } from "@reduxjs/toolkit";
import landingPageReducer from "../features/landingPageSlice";

export const store = configureStore({
  reducer: {
    landingPage: landingPageReducer,
  },
});

export default store;
