import { createSlice } from "@reduxjs/toolkit";

interface IState {
  sidebar: boolean;
}

const initialState: IState = {
  sidebar: true,
};

export const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
  setSidebar: (state, { payload }) => {
      state.sidebar = payload;
    },
  },
});

export const { setSidebar } = storeSlice.actions;
export default storeSlice.reducer;
