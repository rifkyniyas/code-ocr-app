import { configureStore } from "@reduxjs/toolkit";
import codeEditorReducer from "./codeEditorSlice";
import imageDataReducer from "./imageDataSlice";
import ocrReducer from "./ocrSlice";
import notificationReducer from "./notificationSlice";
export const store = configureStore({
  reducer: {
    codeEditor: codeEditorReducer,
    imageData: imageDataReducer,
    ocr: ocrReducer,
    notification: notificationReducer,
  },
});
