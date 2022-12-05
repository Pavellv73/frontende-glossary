import { createSlice } from "@reduxjs/toolkit";
import { DataType } from "../types/dataType";

const initialState: DataType = {
  data: [
    {
      categoryId: 1,
      categoryTitle: "HTML",
      questions: [
        {
          id: Math.random(),
          question: "Test 1",
          answer: "Test 1",
        },
        {
          id: Math.random(),
          question: "Test 2",
          answer: "Test 2",
        },
      ],
    },
    {
      categoryId: 2,
      categoryTitle: "Styles",
      questions: [
        {
          id: Math.random(),
          question: "Test 1",
          answer: "Test 1",
        },
        {
          id: Math.random(),
          question: "Test 2",
          answer: "Test 2",
        },
      ],
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addQuestion } = dataSlice.actions;

export default dataSlice.reducer;
