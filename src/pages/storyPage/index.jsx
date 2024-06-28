import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoryFilter from "./statusFilter";
import StoryCard from "../../components/card";
import { storyPageApiAsyncThunk } from "../../redux/asyncThunk/storyData.asyncThunk";

const StoryPage = () => {
  const dispatch = useDispatch();
  const { storyData } = useSelector((state) => state.StoryData);

  useEffect(() => {
    dispatch(storyPageApiAsyncThunk.fetchStoryPageData());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl font-bold my-2 text-center">Story Page</h1>
      <div className="container mx-auto px-4">
        <StoryFilter />

        <div className="grid grid-cols-3 gap-4">
          {storyData.map((story) => (
            <StoryCard
              key={story._id}
              title={story.Title}
              imageUrl={story?.Image[0]}
              status={story.Status}
              id={story._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StoryPage;
