import { createSlice } from "@reduxjs/toolkit";
import { getCoordinates } from "../utils/getCoordinates";
import { inintial } from "./initial";

const BoardSlice = createSlice({
  name: "board",
  initialState: inintial,
  reducers: {
    setBoard(state, action) {
      state.coordinates = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCoordinates.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
    });
    builder.addCase(getCoordinates.fulfilled, (state, action) => {
      state.coordinates = action.payload;
    });
    builder.addCase(getCoordinates.rejected, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `rejected` action creator
    });
  },
});

//export const { setBoard } = BoardSlice.actions;
export default BoardSlice.reducer;
