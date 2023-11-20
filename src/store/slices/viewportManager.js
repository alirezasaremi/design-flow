import { createSlice } from "@reduxjs/toolkit";
import Viewports from "../../constants/ViewportTypes";

const initialState = Viewports;

const viewportManagerSlice = createSlice({
  name: "viewportManager",
  initialState,
  reducers: {
    switchViewport(state, action) {
      for (const item of state) {
        if (item.name === action.payload.view) {
          item.active = true;
        } else {
          item.active = false;
        }
      }
    },
  },
});

export const viewportManagerActions = viewportManagerSlice.actions;

export default viewportManagerSlice.reducer;
