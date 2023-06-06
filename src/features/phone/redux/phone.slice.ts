import { createSlice } from "@reduxjs/toolkit";
import { Phone } from "../models/phone";

export type PhoneState = {
  phone: Phone;
};

const initialState: PhoneState = {
  phone: { isCalling: false, phoneNumber: "" },
};

const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    updateCall: (state, { payload }) => ({
      ...state,
      phone: payload,
    }),
    // updateDisplay: (state, { payload }) => ({
    //   ...state,
    //   phone: state.phone.phoneNumber.map((item) => item.)
    // })
  },
});
export const ac = slicePhone.actions;
export default slicePhone.reducer;
