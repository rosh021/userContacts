import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUsers: [],
  click: [],
  showComp: "list",
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
      state.showComp = "selected";
    },
    setShowComp: (state, { payload }) => {
      state.showComp = payload;
    },
  },
});

const { reducer, actions } = userSlice;
export const { setUsers, setClick, setShowComp } = actions;

export default reducer;
