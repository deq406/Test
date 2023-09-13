import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const endDate = 1;
interface State {
  dates: string[];
}
export const fetchDates = createAsyncThunk(
  "/dates/fetchDates",
  async (dates: string[]) => {
    try {
      const { data } = await fetch("/postDates", {
        method: "POST",
        body: JSON.stringify(dates),
      }).then((response) => response.json());
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

const initialState: State = {
  dates: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    addDates: (state, action) => {
      action.payload[endDate] !== ""
        ? state.dates.push(action.payload)
        : console.log("plese enter end date");
    },
  },
});

export const { addDates } = calendarSlice.actions;

export const calendarReducer = calendarSlice.reducer;
