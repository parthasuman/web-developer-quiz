import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Quizs = () => {
  const answers = useLoaderData();
  const mainAnswers = answers.data;
  const { id } = mainAnswers;

  const mainQuestions = mainAnswers.questions;

  return (
    <div className="text-center  m-8 border-solid border-2 border-indigo-600">
      <p>Your Quiz {id}</p>
      <p className="text-2xl font-semibold ">Quiz Name: {mainAnswers.name}</p>

      {mainQuestions.map((mainQuestion) => (
        <Questions
          key={mainQuestion.id}
          mainQuestion={mainQuestion}
        ></Questions>
      ))}
    </div>
  );
};

export default Quizs;
