import React from "react";
import Image from "next/image";

export default function Projects(props) {
  return (
    <div className=" w-dvw flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row w-[90%] border-2 border-neutral-800 justify-center shadow-neutral-800 rounded-2xl md:rounded-2xl overflow-hidden mt-8">
        <div className="relative h-[175px] md:h-[375px] md:w-1/2 mask-b-from-15 md:mask-r-from-50 md:mask-b-from-100%">
          <Image
            src={props.src}
            alt={props.alt}
            fill
            style={{ objectFit: "fill", borderRadius: "7px" }}
            priority
          />
        </div>
        <div className="flex flex-col gap-5 md:w-1/2 p-5 items-center justify-around">
          <div>
            <h1 className="text-white text-center text-3xl md:text-5xl md:pl-10 md:pr-10 font-bold">
              {props.title}
            </h1>
          </div>
          <div>
            <p className="text-neutral-400 text-center md:text-left text-xs md:text-lg md:pl-15 md:pr-15">
              {props.description}
            </p>
          </div>
          <div>
            <button className="transition-all duration-300 hover:scale-110 shadow-2xl shadow-neutral-700 text-white hover:cursor-pointer border-1 border-white hover:bg-white hover:text-black font-bold p-2 pl-4 pr-4 text-sm rounded-xl">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
