import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ imageUrl, title, status,id }) => {

   const navigate=useNavigate()

  // Define an object mapping status to Tailwind CSS text color classes
  const buttonStatus = {
    Published: "text-sky-500",
    Draft: "text-rose-700",
    InProgress: "text-amber-400",
    Completed: "text-indigo-500",
  };

  // Determine the class to apply based on the status
  const statusClass = `text-center bg-white ${buttonStatus[status]} font-bold py-2 px-4 rounded-full w-full`;

  return (
    <div
     onClick={()=>navigate(`/storyDetails/${id}`)}
     className="cursor-pointer max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-blue-900">
      <img
        className="w-full h-60 object-cover px-4 pt-4 rounded-md"
        src={`https://ik.imagekit.io/dev24/${imageUrl}`}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-white">{title}</div>
        <div className={statusClass}>
          <span> {status}</span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
