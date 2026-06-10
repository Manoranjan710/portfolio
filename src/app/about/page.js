import React from "react";
import BackHome from "../../components/BackHome";

const About = () => {
  return (
    <div className="bg-[#4d4c4c] md:h-screen text-white p-8">
      <h1 className="text-[#d4e9fa] md:text-3xl text-xl font-bold">
        {" "}
        ABOUT ME...
      </h1>
      <h2 className="text-white md:text-xl mt-2 md:mt-6 ">
        {" "}
        <span className="md:text-2xl text-lg text-[#d4e9fa]  font-semibold "> Education: </span> 🎓
        Bachelor's in Civil Engineering
      </h2>
      <p className=" text-white md:text-xl mt-3 ">
        {" "}
        Frontend-focused Full Stack Developer with 3.6 years of experience delivering
        enterprise-scale cloud dashboards and AI-powered platforms. I specialize in
        Next.js, React, TypeScript, and Node.js, with a strong emphasis on performance
        — achieving 40–60% reductions in load times across high-traffic dashboards
        through code splitting, lazy loading, memoization, and virtual scrolling.
      </p>
      <p className=" text-white md:text-xl mt-3 ">
        {" "}
        Most recently, I contributed to production-grade cloud infrastructure UI at
        OLA Krutrim — architecting dashboards for managing virtual machines, storage,
        and load balancers used by thousands of users — and engineered RAG-based AI
        analytics systems using OpenAI APIs and the Qdrant vector database. I enjoy
        owning the full delivery lifecycle: system design, development, performance
        tuning, and cloud deployment.
      </p>

      <div className="md:mt-10 mt-3">
        <h1 className=" text-[#d4e9fa] md:text-3xl text-lg font-semibold md:font-bold">
          {" "}
          Technologies I can work with...{" "}
        </h1>
        <div className="grid md:grid-cols-10 md:grid-flow-row grid-flow-row  grid-cols-3  md:gap-7 md:mt-10 mt-3 items-center gap-4">
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/html-5--v1.png"
              alt="html-5--v1"
              className=" shadow-md shadow-orange-600 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">HTML</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/css3.png"
              alt="css3"
              className=" shadow-md shadow-cyan-400 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">CSS</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/48/javascript.png"
              alt="javascript"
              className=" shadow-md shadow-yellow-400 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">JavaScript</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/react-native.png"
              alt="react-native"
              className=" shadow-md shadow-cyan-300 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">ReactJS</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency-systems-filled/240/FFFFFF/nextjs.png"
              alt="nextjs"
              className=" shadow-md shadow-white rounded p-1 bg-black"
            />
            <h2 className="text-white md:text-xl mt-3">Next.js</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/typescript.png"
              alt="typescript"
              className=" shadow-md shadow-blue-500 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">TypeScript</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/nodejs.png"
              alt="nodejs"
              className=" shadow-md shadow-green-500 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">Node.js</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/tailwindcss.png"
              alt="tailwindcss"
              className=" shadow-md shadow-cyan-500 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">TailwindCSS</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/bootstrap.png"
              alt="bootstrap"
              className=" shadow-md shadow-purple-400 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">Bootstrap</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency/240/python.png"
              alt="python"
              className=" shadow-md shadow-yellow-200 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">Python</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/fluency-systems-filled/240/FFFFFF/express-js.png"
              alt="express"
              className=" shadow-md shadow-white rounded p-1 bg-black"
            />
            <h2 className="text-white md:text-xl mt-3">Express</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/postgreesql.png"
              alt="postgresql"
              className=" shadow-md shadow-blue-400 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">PostgreSQL</h2>
          </div>
          <div className="flex flex-col justify-center">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/mongodb.png"
              alt="mongodb"
              className=" shadow-md shadow-green-500 rounded p-1"
            />
            <h2 className="text-white md:text-xl mt-3">MongoDB</h2>
          </div>
          <div>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/480/material-ui.png"
              alt="material-ui"
              className=" shadow-md shadow-cyan-200 rounded p-1"
            />
            <h2 className="text-white text-base md:text-xl mt-3">Material UI</h2>
          </div>
        </div>
      </div>
      <BackHome/>
    </div>
  );
};

export default About;
