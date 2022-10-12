import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [totals, setTotal] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/quiz')
    // .then(res => res.json())
    // .then(data => {})

    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const courseName = data.data.data;
      const courseData = courseName.map((course) => {
        const totalQuiz = {
          name: course.name,
          quiz: course.total,
        };
        return totalQuiz;
      });

      setTotal(courseData);
    });
  }, []);
  return (
    <div>
      <BarChart width={500} height={400} data={totals}>
        <Bar dataKey="quiz" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Statistics;
