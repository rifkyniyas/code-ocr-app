import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  originalData: null,
  isCropped: false,
  croppedData: null,
  isExtracted: false,
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
