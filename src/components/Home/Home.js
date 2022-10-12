import React from "react";
import { useLoaderData } from "react-router-dom";
import MainData from "../MainData/MainData";
import heroImg from "../Image/hero.jpg";

const Home = () => {
  const topics = useLoaderData();

  const mainDatas = topics.data;

  return (
    <div>
      <div>
        <section>
          <div className="bg-gray-100">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
              <h1 className="text-3xl font-semibold leading-none sm:text-6xl xl:max-w-3xl text-gray-800">
                Welcome To Web Developer Quiz
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                Where you can test you web development knowlage.
              </p>
            </div>
          </div>
          <img
            src={heroImg}
            alt=""
            className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500"
          />
        </section>
      </div>
      <div className="grid gap-8 row-gap-4 m-8 lg:grid-cols-2 lg:row-gap-8">
        {mainDatas.map((mainData) => (
          <MainData key={mainData.id} mainData={mainData}></MainData>
        ))}
      </div>
    </div>
  );
};

export default Home;
