import { createSlice } from "@reduxjs/toolkit";
import { LessonStatus } from "../../components/Lesson/Lesson";

interface lessonData {
  dayOfWeek: string;
  date: string;
  status: LessonStatus;
}

interface lessonState {
  data: lessonData[];
}

const initialState: lessonState = {
  data: [
    { dayOfWeek: "Пн.", date: "20.04", status: LessonStatus.SUCCESS },
    { dayOfWeek: "Пт.", date: "24.04", status: LessonStatus.CANCELED },
    { dayOfWeek: "Вт.", date: "28.04", status: LessonStatus.SKIPED },
    { dayOfWeek: "Ср.", date: "30.04", status: LessonStatus.PLANNED },
    { dayOfWeek: "Чт.", date: "22.04", status: LessonStatus.SUCCESS },
  ],
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {},
});

export const lessonReducer = lessonSlice.reducer;
