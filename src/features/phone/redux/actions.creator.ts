import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "./action.types";
import { Phone } from "../models/phone";

type Keys = keyof typeof actionTypes;

export type PhoneAction = {
  type: (typeof actionTypes)[Keys];
  payload: Phone | string | boolean;
};

export const updatePhoneAction = createAction<boolean>(actionTypes.updatecall);

export const updateDisplay = createAction<string>(actionTypes.updateDisplay);

export const deleteDisplay = createAction<string>(actionTypes.deleteDisplay);
