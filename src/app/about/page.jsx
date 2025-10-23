import { FaLinkedin, FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";
import React from "react";
import "@/app/globals.css";


const AchievementCard = ({ title, type, value }) => (
  <div className="mt-2 flex w-[90%] items-center justify-between bg-neutral-900/55 md:bg-gray-900 p-1 pb-2 rounded-full">
    <div>
      <h1 className="font-bold text-lg md:text-[1.3em] text-yellow-300 font-stretch-100% pl-5 md:pl-11">
        {title}
      </h1>
      <p className="mt-[-2px] text-justify text-[10px] md:text-sm text-gray-400 md:pl-10 pl-5 font-bold">
        - {type} -
      </p>
    </div>
    <div>
      <h1 className="font-bold text-sm md:text-[1.3em] text-gray-300 font-stretch-100% pr-5 md:pr-11">
        {value}
      </h1>
    </div>
  </div>
);

const achievements = [
  { title: "Scriptura", type: "Achievement", value: "3rd Price" },
  { title: "Web Development", type: "Certificate", value: "Udemy" },
];

const EducationCard = ({ title, year, description }) => (
  <div className="mt-2 flex w-[90%] items-center justify-between bg-neutral-900/55 md:bg-gray-900 p-2 pb-3 rounded-full">
    <div>
      <h1 className="font-bold text-lg md:text-[1.3em] text-yellow-300 font-stretch-100% pl-5 md:pl-11">
        {title}
      </h1>
      <p className="mt-[-2px] text-justify text-[10px] md:text-sm text-gray-400 md:pl-10 pl-5 font-bold">
        {description}
      </p>
    </div>
    <div>
      <h1 className="font-bold text-sm md:text-[1.3em] text-gray-300 font-stretch-100% pr-5 md:pr-11">
        {year}
      </h1>
    </div>
  </div>
);

const education = [
  { title: "B-Tech CSE", year: "2022-Present", description: "Vel Tech University" },
  { title: "12th Class", year: "2021-2022", description: "MIRS Chennai" },
  { title: "10th Class", year: "2019-2020", description: "SPRS Miryalaguda" },
];

const HobbyCard = ({ hobby }) => (
  <div className="bg-neutral-900/55 md:bg-gray-900 px-5 py-2 rounded-full text-gray-300 hover:text-yellow-300 transition-colors">
    {hobby}
  </div>
);

const hobbies = [
  "Video games",
  "Cricket",
  "Exploring technologies",
  "Badminton",
  "Working on own projects",
  "Mocking iSheeps"
];

export default function Page() {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="min-h-1/4 md:w-3/4 flex flex-col md:flex-row justify-between p-5 items-center">
        <div className="font-bold text-white">
          <h1 className="text-center md:text-left font-bold mask-b-from-4.5 text-5xl md:text-6xl">
            About Me
          </h1>
          <h4 className="text-yellow-400 text-sm md:text-[0.9em]">
            Sharvanth Rapolu -- Full Stack Developer
          </h4>
        </div>
        <div className="mt-5 md:mt-0 flex items-center w-[100%] md:w-1/4 justify-around">
          <div className="h-20 w-20 border-1 border-amber-50 rounded-full ring-2">
            <img
              src="/images/logos/me.jpg"
              alt="my image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 pt-3">
              <a
                href="https://www.linkedin.com/in/sharvanthrapolu/"
                className="text-white/75 hover:text-blue-500/75 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Sharvanth-05"
                className="text-white/75"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:rapolusharvanth@gmail.com"
                className="text-white/75 hover:text-purple-500 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://x.com/ChErRyGaMeR012"
                className="text-white/75 hover:text-blue-400 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
            <div className="flex w-full p-2">
              <a
                href=""
                className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-full rounded-lg text-center p-1 font-bold"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <section className="mt-10 md:bg-gradient-to-r from-gray-900 to-black text-white border-2 border-neutral-900 md:w-4/5 rounded-4xl">
          <div className="p-5 pb-2">
            <h1 className="text-4xl font-bold text-white mask-b-from-2.5 md:pl-5 md:pr-5">
              Know Me
            </h1>
          </div>
          <div className="p-5 pt-1 flex md:flex-row flex-col md:gap-10 gap-5">
            <p className="md:w-1/3.5 text-justify text-sm md:text-[1.1em] text-gray-400 md:pl-5 md:pr-5">
              So, You wanted to know more about me? Aren't you? Just kidding.
              Umm, If you think this Intro is as usual as others, you are wrong,
              I will do everything in my style. Okay jokes apart, Hope you doing
              good my friend, to know more about me, my closest people or my
              friends call me as Cherry. Yeah, that's my nickname and it's kind
              of popular, and unisex too. My passion is to be a Game developer
              and it all started after watching a college ad. I mean, I never
              thought that we can also develop games and others can play.
            </p>
          </div>
        </section>
      </div>
      <div className="flex md:flex-row flex-col md:w-4/5 mt-5 gap-4">
        <div className="flex flex-col gap-3 md:w-1/2">
          <section className="md:bg-gradient-to-r from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl">
            <div className="p-5 pb-2">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 md:pl-5 md:pr-5">
                Where I'm Studying
              </h1>
            </div>
            <div className="p-5 pt-1 flex md:flex-row flex-col md:gap-10 gap-5">
              <p className="md:w-1/3.5 text-justify text-sm md:text-[1.1em] text-gray-400 md:pl-5 md:pr-5">
                I decided to be a Game developer but, I have to pick a college
                first. I then started hunting, and finally I choose{" "}
                <span className="text-yellow-300">Vel Tech University </span>
                but, to be my suprise, I would have choosen CSD instead of CSE
                to be as a Game Designer or Developer, and I came to know about
                this in my 2nd Year. You know, I then understood that I haven't
                done enough research so, it's my bad. Hey but, I really love to
                be as a Full Stack Developer too.
              </p>
            </div>
          </section>
          <section className="md:bg-gradient-to-r from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl">
            <div className="p-5 pb-2">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 md:pl-5 md:pr-5">
                My Schooling
              </h1>
            </div>
            <div className="p-5 pt-1 flex md:flex-row flex-col md:gap-10 gap-5">
              <p className="md:w-1/3.5 text-justify text-sm md:text-[1.1em] text-gray-400 md:pl-5 md:pr-5">
                I completed my Higher Secondary Education from{" "}
                <span className="text-yellow-300">MIRS</span> in Chennai, and
                High school from <span className="text-yellow-300">SPRS</span>{" "}
                in Miryalaguda.
              </p>
            </div>
          </section>
          <section className="md:bg-gradient-to-r from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl">
            <div className="p-5 pb-2">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 md:pl-5 md:pr-5">
                Where I Live
              </h1>
            </div>
            <div className="p-5 pt-1 flex md:flex-row flex-col md:gap-10 gap-5">
              <p className="md:w-1/3.5 text-justify text-sm md:text-[1.1em] text-gray-400 md:pl-5 md:pr-5">
                Oh, I think I haven't mentioned where I live lol, I live in a
                small town from Telangana called{" "}
                <span className="text-yellow-300">Miryalaguda</span>. I'm also
                not a social person but if I get to know you, there's no way
                that I sit silent without making you laugh or mocking you. I
                think I should not go much personal because it even makes the
                passage lengthy.
              </p>
            </div>
          </section>
          <section className="md:bg-gradient-to-r from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl">
            <div className="p-5 pb-2">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 md:pl-5 md:pr-5">
                My Academics
              </h1>
            </div>
            <div className="p-5 pt-1 flex md:flex-row flex-col md:gap-10 gap-5">
              <p className="md:w-1/3.5 text-justify text-sm md:text-[1.1em] text-gray-400 md:pl-5 md:pr-5">
                Ohhh!, coming to my academics, no I'm not the guy who scores
                10/10 or above 85%. I'm the guy with{" "}
                <span className="text-yellow-300">77%</span> score through out
                my academics, yes including 10th, 12th, and UG. Ofcourse, I
                don't lack in skills because I belive that skills, and knowledge
                are the two things that makes you stand out from all.
              </p>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <section className="flex flex-col items-center pb-7 md:bg-gradient-to-tl from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl">
            <div className="p-5 pb-2 w-full">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 pl-5">
                Achievements & Certificates
              </h1>
            </div>
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                type={achievement.type}
                value={achievement.value}
              />
            ))}
          </section>
          
          <section className="flex flex-col items-center pb-7 md:bg-gradient-to-tl from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl mt-3">
            <div className="p-5 pb-2 w-full">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 pl-5">
                Education Timeline
              </h1>
            </div>
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                title={edu.title}
                year={edu.year}
                description={edu.description}
              />
            ))}
          </section>
          <section className="flex flex-col items-center pb-7 md:bg-gradient-to-tl from-gray-900 to-black text-white border-2 border-neutral-900 rounded-4xl mt-3">
            <div className="p-5 pb-2 w-full">
              <h1 className="text-4xl font-bold text-white mask-b-from-2.5 pl-5">
                Hobbies & Interests
              </h1>
            </div>
            <div className="w-[90%] flex flex-wrap gap-3 justify-center">
              {hobbies.map((hobby, index) => (
                <HobbyCard key={index} hobby={hobby} />
              ))}
            </div>
          </section>
          <section>
            <div className="mt-2 flex  items-center justify-around bg-gradient-to-br from-yellow-500 to-yellow-700 p-1 pb-2 rounded-full">
              <h1 className="font-bold text-[11px] md:text-[1em] md:full w-1/2">liked my design? I can do it for you too, but not for free ^_^</h1>
              <a
                href="mailto:rapolusharvanth@gmail.com"
                className="bg-black mt-1 mr-[-15px] p-1 pl-4 pr-4 text-yellow-500 flex justify-center items-center gap-2 rounded-full"
              >
                <FaEnvelope size={14} /> Mail me
              </a>  
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
