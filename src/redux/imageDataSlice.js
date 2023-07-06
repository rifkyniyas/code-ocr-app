import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  originalData: "",
  isCropped: false,
  croppedData: "",
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
