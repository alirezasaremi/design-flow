import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import viewportManager from "./slices/viewportManager";
import componentDragger from "./slices/componentDragger";


const store = configureStore({
  reducer: {
    viewportManager: viewportManager,
    componentDragger: componentDragger
  },
  middleware: [thunk],
});

export default store;
