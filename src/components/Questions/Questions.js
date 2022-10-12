import React from "react";

import OptionForAll from "../OptionForAll/OptionForAll";

const Questions = ({ mainQuestion }) => {
  // console.log(mainQuestion);

  const allOptions = mainQuestion.options;
  // console.log(allOptions);

  // console.log(questions);
  const rightAnswer = mainQuestion.correctAnswer;

  return (
    <div className=" m-8 border-solid border-2 border-indigo-600">
      <p className="text-1xl font-semibold">
        Question: {mainQuestion.question}
      </p>
      {/* <p>
        <button className="px-8   mt-4 py-3 font-semibold rounded-full  bg-cyan-200 text-gray-800 hover:bg-cyan-400  ">
          correctAnswer:
        </button>
        <button className="px-8   mt-4 py-3 font-semibold rounded-full  bg-cyan-200 text-gray-800 hover:bg-cyan-400 visible  ">
          {rightAnswer}
        </button>
      </p> */}

      <div>
        {allOptions.map((allOption) => {
          return (
            <OptionForAll
              correctAnswer={mainQuestion.correctAnswer}
              allOption={allOption}
            ></OptionForAll>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
