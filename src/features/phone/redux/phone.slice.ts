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
      phone: { ...state, isCalling: state.isCalling },
    }),
  },
});
export const ac = slicePhone.actions;
export default slicePhone.reducer;
