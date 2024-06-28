import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { storyPageApiAsyncThunk } from "../../redux/asyncThunk/storyData.asyncThunk";

const StoryDetails = () => {
  const params = useParams();
  console.log(params);
  const { id } = params;
  console.log(id);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(storyPageApiAsyncThunk.getStoryDetails({ id }));
    } else {
      navigate("/");
    }
  }, []);

  return (
    <h1 className="text-3xl font-bold my-2 text-center">Story Details Page</h1>
  );
};

export default StoryDetails; // Correct export statement
