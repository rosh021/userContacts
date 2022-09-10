import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../src/redux/reduxSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
