import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: "waitingUpload",
  name: null,
  originalData: null,
  croppedData: null,
  extractedCode: null,
};

export const imageDataSlice = createSlice({
  name: "imageData",
  initialState,
  reducers: {
    updateImgData: (state, action) => {
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    },
  },
});

export const { updateImgData } = imageDataSlice.actions;

export default imageDataSlice.reducer;
