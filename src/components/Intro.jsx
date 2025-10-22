import React from "react";
import Image from "next/image";
import Skills from "./Skills";
import Projects from "./Projects";

export default function Intro() {
  return (
    <div className="w-dvw flex  flex-col items-center ">
      <div className="relative mask-b-from-15 md:mask-b-from-35.5 w-dvw h-[200px] sm:h-dvh">
        <Image
          src="/images/logos/background.jpg"
          alt="Sharvanth Rapolu's image"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="pt-[65px] pl-5 pr-5">
        <h1 className="text-white text-4xl md:text-5xl text-center  font-bold">
          A Wannabe Game Developer turned into a{" "}
          <span className="text-green-400">Full Stack Developer</span>
        </h1>
      </div>
      <Skills />
      <div className="bg-transparent mt-[55px] border-white border-b-1 p-2 pl-4 pr-4">
        <h1 className="text-white brad text-center text-4xl sm:text-5xl font-bold">
          Projects
        </h1>
      </div>
      <Projects
        src="/images/projects/project-1/project-1-lap.png"
        alt="Academics Management System cover Photo"
        title="Academics Management Portal"
        description="Developed a full-stack Rural School Management System to centralize school operations like managing
                    quizzes, tracking attendance, distributing assignments, and generating performance reports. The project
                    significantly improved practical knowledge of secure data handling and developing robust
                    authentication and role-based access systems"
      />
      <Projects
        src="/images/projects/project-2/project-2-lap.png"
        alt="Gadgets Summary cover Photo"
        title="Gadgets Summary"
        description="a Web Application for Electronic Gadget Selection that delivers real-time, personalized suggestions for
                      major device categories (Smartphones, Laptops, Tablets, Audio devices). The application is built upon a
                      collected and managed product dataset and includes essential functionalities like detailed product
                      overviews and comprehensive comparison tools."
      />
      <Projects
        src="/images/projects/project-3/project-3-lap.png"
        alt="Mobilau cover Photo"
        title="Mobilau"
        description="A full-stack Smartphone Tracking Website developed to catalogue and track phones launched from
                    2024 to the present. Designed for efficient front-end/back-end management and utilizes a relational
                    database for real-time data updates."
      />
      <div className="bg-transparent mt-[70px] border-white border-b-1 p-2 pl-4 pr-4">
        <h1 className="text-white brad text-center text-3xl sm:text-5xl font-bold">
          Know a bit about me
        </h1>
      </div>
    </div>
  );
}
