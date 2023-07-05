import { configureStore } from "@reduxjs/toolkit";
import codeEditorReducer from "./codeEditorSlice";
export const store = configureStore({
  reducer: {
    codeEditor: codeEditorReducer,
  },
});
