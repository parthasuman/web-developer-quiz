import React from "react";
import { useLoaderData } from "react-router-dom";
import Quizs from "../Quizs/Quizs";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics);
  const datas = topics.data.questions;
  console.log(datas);
  return (
    <div>
      <h2>This is topics: {datas.length}</h2>
      {datas.map((data) => (
        <Quizs key={data.id} data={data}></Quizs>
      ))}
    </div>
  );
};

export default Topics;
