import React from "react";
import { toast } from "react-toastify";

const OptionForAll = ({ allOption, correctAnswer }) => {
  console.log(correctAnswer);

  const correctHandeler = () => {
    correctAnswer === allOption
      ? toast("success! This is Correct")
      : toast("warning! This is wrong!");
  };

  return (
    <div>
      <button
        className="px-8 block  mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400"
        onClick={correctHandeler}
        checked
      >
        {allOption}
      </button>
    </div>
  );
};

export default OptionForAll;
