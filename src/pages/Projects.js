import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#4d4c4c] h-full md:min-h-fit   text-white">
      <div className=" grid md:grid-flow-row md:grid-cols-2 grid-flow-col md:grid-rows-2 grid-rows-4 md:gap-7 gap-0 justify-items-center">
        <div className=" md:h-min h-fit shadow-lg shadow-black bg-slate-100 p-6 m-8 text-black rounded-lg w-[15rem] md:w-[30rem]  ">
          <a
            href="https://shopping-cart-nine-ochre.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" hover:scale-105 duration-300 rounded-lg"
              src="../../images/shooping-cart.png"
              alt=""
            />
          </a>
          <div className="mt-7">
            <h2 className="md:text-3xl text-xl font-bold mt-2 ">
              {" "}
              Shopping Cart Website{" "}
            </h2>
            <p className=" text-lg font-medium mt-3">
              Responsive website developed by using context api, useState,
              useEffect hooks. It provides real-time experience.{" "}
            </p>
            <h1 className=" text-lg font-semibold mt-2">
              {" "}
              <span className="italic">Stack used:</span> ReactJS, TailwindCSS,
              PostCSS
            </h1>
            <div className=" flex flex-col items-center justify-center mt-3">
              <a
                href="https://github.com/Manoranjan710/shopping-cart"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=" shadow-md shadow-black rounded-2xl hover:scale-125 duration-300"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/github.png"
                  alt="github"
                />
              </a>
              {/* <span className="m-auto">Git Link</span> */}
            </div>
          </div>
        </div>
        <div className=" md:h-[min] h-fit shadow-lg shadow-black bg-slate-100 p-6 m-8 text-black rounded-lg w-[15rem] md:w-[30rem] ">
          <a
            href="https://simple-weather-app-eta-khaki.vercel.app//"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" hover:scale-105 duration-300 rounded-lg"
              src="../../images/weather-app.png"
              alt=""
            />
          </a>
          <div className="mt-7">
            <h2 className="md:text-3xl text-xl font-bold mt-2 "> Weather App </h2>
            <p className=" text-lg font-medium mt-3">
              Responsive website developed by using api, useState, useEffect
              hooks. It provides realtime weather data of the entered city.{" "}
            </p>
            <h1 className=" text-lg font-semibold mt-2">
              {" "}
              <span className="italic">Stack used:</span> ReactJS, TailwindCSS,
              PostCSS
            </h1>
            <div className=" flex flex-col items-center justify-center mt-3">
              <a
                href="https://github.com/Manoranjan710/Simple_weather_app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=" shadow-md shadow-black rounded-2xl hover:scale-125 duration-300"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/github.png"
                  alt="github"
                />
              </a>
              {/* <span className="m-auto">Git Link</span> */}
            </div>
          </div>
        </div>
        <div className=" md:h-[min] h-fit shadow-lg shadow-black bg-slate-100 p-6 m-8 text-black rounded-lg w-[15rem] md:w-[30rem] ">
          <a
            href="https://quizz-iq.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" hover:scale-105 duration-300 rounded-lg"
              src="../../images/quiz-app.png"
              alt=""
            />
          </a>
          <div className="mt-7">
            <h2 className="md:text-3xl text-xl font-bold mt-2 "> Quiz App </h2>
            <p className=" text-lg font-medium mt-3">
              Responsive website developed by using random api. It is user friendly which provides multiple topics quiz with updating score and displays final result.{" "}
            </p>
            <h1 className=" text-lg font-semibold mt-2">
              {" "}
              <span className="italic">Stack used:</span> ReactJS, TailwindCSS,
              PostCSS
            </h1>
            <div className=" flex flex-col items-center justify-center mt-3">
              <a
                href="https://github.com/Manoranjan710/Quizz_IQ"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=" shadow-md shadow-black rounded-2xl hover:scale-125 duration-300"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/github.png"
                  alt="github"
                />
              </a>
              {/* <span className="m-auto">Git Link</span> */}
            </div>
          </div>
        </div>
        <div className=" md:h-[min] h-fit shadow-lg shadow-black bg-slate-100 p-6 m-8 text-black rounded-lg w-[15rem] md:w-[30rem] ">
          <a
            href="https://text-utils-mds.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className=" hover:scale-105 duration-300 rounded-lg"
              src="../../images/text-utils.png"
              alt=""
            />
          </a>
          <div className="mt-7">
            <h2 className="md:text-3xl text-xl font-bold mt-2 ">Text Utility Website </h2>
            <p className=" text-lg font-medium mt-3">
              Responsive website developed by using react hooks. It performs multiple functions such as converting text to uppercase and vice versa, copy text, clear text, removing extra spaces.{" "}
            </p>
            <h1 className=" text-lg font-semibold mt-2">
              {" "}
              <span className="italic">Stack used:</span> ReactJS, TailwindCSS,
              PostCSS
            </h1>
            <div className=" flex flex-col items-center justify-center mt-3">
              <a
                href="https://github.com/Manoranjan710/TextUtils"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className=" shadow-md shadow-black rounded-2xl hover:scale-125 duration-300"
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/github.png"
                  alt="github"
                />
              </a>
              {/* <span className="m-auto">Git Link</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
