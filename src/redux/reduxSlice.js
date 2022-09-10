import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  click: [],
};

const userSlice = createSlice({
  name: "allUser",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.allUsers = payload;
    },

    setClick: (state, { payload }) => {
      state.click = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUsers, setClick } = actions;

export default reducer;
