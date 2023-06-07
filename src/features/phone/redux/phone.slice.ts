import { createSlice } from "@reduxjs/toolkit";
import { Phone } from "../models/phone";

const initialState: Phone = {
  isCalling: false,
  phoneNumber: "",
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    updateCall: (state) => ({
      ...state,
      phone: { ...state, isCalling: !state.isCalling },
    }),

    updateDisplay: (state, { payload }) => ({
      ...state,
      phone: { ...state, phoneNumber: state.phoneNumber + payload },
    }),

    // deleteDisplay: (state) => ({})
  },
});
export const { updateCall, updateDisplay } = slicePhone.actions;
export default slicePhone.reducer;
