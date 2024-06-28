// Import ButtonComponent correctly based on your project structure

import ButtonComponent from "../../components/button";

const StoryFilter = () => {
  const statusButtons = [
    { text: "Published", bgColor: "emerald" },
    { text: "InProgress", bgColor: "emerald" },
    { text: "Draft", bgColor: "emerald" },
    { text: "Completed", bgColor: "emerald" },
    { text: "Clear All", bgColor: "emerald" },
  ];

  return (
    <div className="flex space-x-2 mb-4">
      {statusButtons.map((btn, index) => (
        <ButtonComponent
          key={index}
          bgColor={btn.bgColor}
          text={btn.text}
        />
      ))}
    </div>
  );
};

export default StoryFilter; // Correct export statement

