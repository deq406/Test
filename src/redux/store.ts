import { configureStore } from "@reduxjs/toolkit";
import { lessonReducer } from "./slices/lessons";
import { calendarReducer } from "./slices/calendar";
import { useDispatch } from "react-redux";
const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    calendar: calendarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
