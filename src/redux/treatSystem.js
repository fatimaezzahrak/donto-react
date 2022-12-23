import { createSlice } from "@reduxjs/toolkit";

const treatSystem = createSlice({
  name: "treats",
  initialState: {
    treats: [],
  },
  reducers: {
    //check if the treat is already in the list
    addTreat: (state, action) => {
      const treat = action.payload;
      const treatExists = state.treats.find((t) => t.id === treat.id);
      if (!treatExists) {
        state.treats.push(treat);
      }
    },

    removeTreat: (state, action) => {
      state.treats = state.treats.filter(
        (treat) => treat.id !== action.payload
      );
    },
  },
});

export const { addTreat, removeTreat } = treatSystem.actions;

export default treatSystem.reducer;
