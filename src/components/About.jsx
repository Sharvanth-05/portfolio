import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center rounded-3xl justify-between gap-5 md: text-2xl border-2 border-neutral-800 w-[90%] mt-10">
      <div className="mask-b-from-20 md:mask-none">
        <Image
          src="/images/logos/me.jpg"
          alt="An Image of me"
          height={400}
          width={300}
          className="md:h-100 md:w-75 rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-center justify-around h-[400px]  md:w-3/4 pb-5 pl-5 pr-5 text-justify">
        <div>
          <p className="text-white/80 text-shadow-white text-pretty text-sm font-semibold md:text-2xl md:pr-10">
            Hey wassup? It's Sharvanth here. I'm a student at Vel Tech pursuing
            B.Tech CSE with specialization in Animation and Gaming. Hold on, the
            specialization is just for name sake and yes I always dreamt to be a
            Game Developer but yeah, we all know it, not everything goes right
            always. Now, I love Computers, and it made me to fall for
            programming so, I'm continuing with it. I usually play a few PC
            games and smartphone games. I Love to play badminton but my heart
            wants me to play Archery. So yeah, if you are curious to know more
            about this boring guy, you can, by clicking the button below.
          </p>
        </div>
        <div>
          <button className="transition-all duration-300 hover:scale-110 text-white hover:cursor-pointer border-2 border-white/75 hover:bg-white hover:text-black text-[1rem] font-bold p-3 pl-4 pr-4 rounded-xl">
            Know more
          </button>
        </div>
      </div>
    </div>
  );
}
