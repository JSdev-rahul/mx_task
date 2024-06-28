/* eslint-disable */

import {createSlice } from "@reduxjs/toolkit";
import { storyPageApiAsyncThunk } from "../asyncThunk/storyData.asyncThunk";
import { RequestStatus } from "../constant/redux.constant";

const initialState = {
  storyData: [],
};

const storyDataSlice = createSlice({
  name: "storyDataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      storyPageApiAsyncThunk.fetchStoryPageData.pending,
      (state) => {
        state.status = RequestStatus.Pending;
      }
    );
    builder.addCase(
      storyPageApiAsyncThunk.fetchStoryPageData.fulfilled,
      (state, action) => {
        state.storyData=action.payload.data
        state.status = RequestStatus.Fulfilled;
      }
    );
    builder.addCase(
      storyPageApiAsyncThunk.fetchStoryPageData.rejected,
      (state) => {
        state.status = RequestStatus.Rejected;
      }
    );
  },
});

export default storyDataSlice.reducer;
