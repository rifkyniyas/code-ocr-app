import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  worker: null,
  loggedData: {},
};

export const ocrSlice = createSlice({
  name: "ocr",
  initialState,
  reducers: {
    updateWorker: (state, action) => {
      console.log(action.payload);
      state.worker = action.payload;
    },
    updateLog: (state, action) => {
      state.loggedData = action.payload;
    },
  },
});

export const { updateWorker, updateLog } = ocrSlice.actions;

export default ocrSlice.reducer;
