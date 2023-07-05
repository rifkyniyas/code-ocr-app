import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "vscodeDark",
  language: "javascript",
};

export const codeEditorSlice = createSlice({
  name: "codeEditor",
  initialState,
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
    updateLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { updateTheme, updateLanguage } = codeEditorSlice.actions;

export default codeEditorSlice.reducer;
