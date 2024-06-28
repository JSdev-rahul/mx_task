import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../config/api_config";
import axios from "axios";
import { replaceUrl } from "../constant/redux.constant";
class StoryPageApiAsyncThunk {
  fetchStoryPageData = createAsyncThunk(
    "getAllStoryPageData",
    async (_, { rejectWithValue }) => {
      try {
        const url = API_ENDPOINT.STORY_DATA;
        const response = await axios.get(url);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );
  getStoryDetails = createAsyncThunk(
    "getStoryDetails",
    async (payload, { rejectWithValue }) => {
      console.log("payload", payload);
      const { id } = payload;
      try {
        const url = replaceUrl(API_ENDPOINT.GET_STORY_DATA_DETAILS, { id });
        const response = await axios.get(url);
        return response;
      } catch (err) {
        return rejectWithValue(err);
      }
    }
  );
}

export const storyPageApiAsyncThunk = new StoryPageApiAsyncThunk();
