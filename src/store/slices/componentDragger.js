import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  component: null,
};

const componentDraggerSlice = createSlice({
  name: "componentDragger",
  initialState,
  reducers: {
    setComponent(state, action) {
      state.id = action.payload.comp.id;
      state.name = action.payload.comp.name;
      state.component = action.payload.comp.component;
    },
    removeComponent(state) {
      state.id = initialState.id;
      state.name = initialState.name;
      state.component = initialState.component;
    },
  },
});

export const componentDraggerActions = componentDraggerSlice.actions;

export default componentDraggerSlice.reducer;
