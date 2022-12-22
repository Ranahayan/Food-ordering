import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSucces = createAction("api/CallSucces");
export const apiCallFailed = createAction("api/CallFailed");