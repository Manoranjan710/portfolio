import React from "react";
import BackHome from "../components/BackHome";

const About = () => {
  return (
    <div className="bg-[#4d4c4c] md:h-screen text-white p-8">
      <h1 className="text-[#d4e9fa] md:text-3xl text-xl font-bold font-['Raleway']">
        {" "}
        ABOUT MANORANJAN
      </h1>
      <h2 className="text-white md:text-xl mt-2 md:mt-6 ">
        {" "}
        <span className="md:text-2xl text-lg text-[#d4e9fa]  font-semibold "> Education: </span> 🎓
        Bachelor's in Civil Engineering
      </h2>
      <p className=" text-white md:text-xl mt-3 ">
        {" "}
        Passionate and dedicated professional with one year of experience as a Frontend Developer, previously working as a 3D Visualizer at Livspace. Proficient in HTML, CSS, JavaScript, React.js, NextJS, Python and Bootstrap, I have honed a strong foundation in web development technologies. Excited to leverage my background in 3D visualization to enhance user experiences and contribute to the success of a progressive team with my frontend development skills.
        {/* Through self-directed learning and hands-on projects, I have honed my
        skills in creating responsive and visually appealing web interfaces. */}
        {/* With a keen eye for design and a drive for continuous improvement, I am
        eager to apply my technical expertise and creativity to contribute to
        innovative frontend projects. As a versatile learner, I thrive in
        dynamic environments and possess excellent problem-solving and
        collaboration abilities.  */}
        I am excited to leverage my past experience and
        newfound frontend development skills to build immersive user experiences
        and contribute to the success of a forward-thinking team.{" "}
      </p>
      <p className=" text-white md:text-xl">
        {" "}
        I have 3 years of experience as a 3D Visualizer in Livspace company.
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
