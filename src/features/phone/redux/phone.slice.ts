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
    hang: (state, { payload }) => ({
      ...state,
      phone: payload,
    }),
  },
});
