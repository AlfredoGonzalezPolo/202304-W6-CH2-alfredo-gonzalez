import { configureStore } from "@reduxjs/toolkit";
import phoneSlice from "../../features/phone/redux/phone.slice";

export const store = configureStore({
  reducer: {
    phone: phoneSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
