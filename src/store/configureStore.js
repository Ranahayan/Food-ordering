import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import api from "../middleware/api";
import reducer from './combineReducer';

export default function () {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            api,
        ],
    });
}
