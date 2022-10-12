import React from "react";
import { Link } from "react-router-dom";

const MainData = ({ mainData }) => {
  const { id, name, logo, total } = mainData;

  return (
    <div className="bg-gray-100 p-6 rounded shadow-lg">
      <img
        className="object-cover w-100 h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80 bg-sky-200"
        src={logo}
        alt=""
      ></img>
      <p className="text-2xl font-semibold">Name: {name}</p>
      <p>Total Quiz: {total}</p>
      <button className="px-8 block w-1/2 mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400">
        Take Quiz <Link to={`/topics/${id}`}>{name}</Link>
      </button>
    </div>
  );
};

export default MainData;
