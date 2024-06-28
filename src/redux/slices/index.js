import { combineReducers } from "@reduxjs/toolkit";
import storyDataSlice from "./storyData.slice";
export default combineReducers({
  StoryData: storyDataSlice,
});
