import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    updateNotification: (state, action) => {
      state.message = action.payload;
    },
    clearNotification: () => initialState,
  },
});

export const { updateNotification, clearNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
