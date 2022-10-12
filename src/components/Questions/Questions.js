import React from "react";
import OptionForAll from "../OptionForAll/OptionForAll";

const Questions = ({ mainQuestion }) => {
  // console.log(mainQuestion);

  const allOptions = mainQuestion.options;
  // console.log(allOptions);

  // console.log(questions);
  return (
    <div className=" m-8 border-solid border-2 border-indigo-600">
      <p className="text-1xl font-semibold">
        Question: {mainQuestion.question}
      </p>
      <p>aaa: {mainQuestion.correctAnswer}</p>

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
