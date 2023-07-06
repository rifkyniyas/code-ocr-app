import { configureStore } from "@reduxjs/toolkit";
import codeEditorReducer from "./codeEditorSlice";
import imageDataReducer from "./imageDataSlice";
export const store = configureStore({
  reducer: {
    codeEditor: codeEditorReducer,
    imageData: imageDataReducer,
  },
});
