import React from "react";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function SkillsPage() {
  return (
    <div className="p-5 flex flex-col md:flex-row gap-5 flex-wrap justify-center">
      <div className="flex flex-col rounded-2xl items-center md:w-100 text-white p-5 md:p-10 border-2 border-neutral-600">
        <Image
          src="/images/logos/java.png"
          alt="Java Logo"
          width={100}
          height={100}
        />
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl">Java Programming</h1>
          <div className="mt-5 flex gap-3 justify-between">
            <button className="bg-white w-1/2 p-2 pl-4 pr-4 text-black font-bold rounded-full">
              Proficient
            </button>
            <button className="bg-blue-600 p-2 w-1/2 pl-4 pr-4 text-white font-bold rounded-full">
              Core
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl items-center justify-between md:w-100 text-white p-5 md:p-10 border-2 border-neutral-600">
        <div className="md:w-20 md:h-20 h-15 w-15 flex gap-3 justify-center">
          <Image
            src="/images/logos/java.png"
            alt="Java Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/logos/spring.png"
            alt="Java Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/logos/pg.png"
            alt="Java Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl mt-5">Java Backend</h1>
          <div className=" flex gap-3 mt-2 justify-between">
            <button className="flex justify-center items-center border-2 border-white w-1/2 p-2 pl-4 pr-4 text-white font-bold rounded-full">
              Beginner
            </button>
            <button className="flex justify-center items-center bg-green-700 p-2 w-1/2 pl-4 pr-4 text-white font-bold rounded-full">
              Dev
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl items-center justify-between md:w-100 text-white p-5 md:p-10 border-2 border-neutral-600">
        <div className="md:w-20 md:h-20 h-15 w-15 flex gap-3 justify-center">
          <Image
            src="/images/logos/express.png"
            alt="Express Logo"
            width={100}
            height={100}
            style={{
              backgroundColor: "white",
              borderRadius: "100%",
              padding: "10px",
            }}
          />
          <Image
            src="/images/logos/node.png"
            alt="Node Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/logos/pg.png"
            alt="Postgres Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl mt-5">Web Backend</h1>
          <div className=" flex gap-3 mt-2 justify-between">
            <button className="flex justify-center items-center bg-white w-1/2 p-2 pl-4 pr-4 text-black font-bold rounded-full">
              Proficient
            </button>
            <button className="flex justify-center items-center bg-green-700 p-2 w-1/2 pl-4 pr-4 text-white font-bold rounded-full">
              Dev
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl items-center justify-between md:w-100 text-white p-5 md:p-10 border-2 border-neutral-600">
        <div className="md:w-20 md:h-20 h-15 w-15 flex gap-3 justify-center">
          <Image
            src="/images/logos/html.png"
            alt="Html Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/logos/css.png"
            alt="CSS Logo"
            width={100}
            height={100}
          />
          <Image
            src="/images/logos/js.png"
            alt="Java Script Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl mt-5">Web Frontend</h1>
          <div className=" flex gap-3 mt-2 justify-between">
            <button className="flex justify-center items-center bg-white w-1/2 p-2 pl-4 pr-4 text-black font-bold rounded-full">
              Proficient
            </button>
            <button className="flex justify-center items-center bg-green-700 p-2 w-1/2 pl-4 pr-4 text-white font-bold rounded-full">
              Dev
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl items-center justify-between md:w-100 text-white p-5 md:p-10 border-2 border-neutral-600">
        <div className="md:w-20 md:h-20 h-15 w-15 flex gap-3 justify-center">
          <Image
            src="/images/logos/nextjs.png"
            alt="Nextjs Logo"
            width={100}
            height={100}
            style={{ backgroundColor:"white", borderRadius:"100%"}}
          />
          <Image
            src="/images/logos/react.png"
            alt="React Logo"
            width={200}
            height={150}
            style={{width:"80px", height:"70px", marginTop:"-5px"}}
          />
          <Image
            src="/images/logos/tailwind.png"
            alt="Tailwind Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col text-center">
          <h1 className="font-bold text-3xl mt-5">Web Frontend</h1>
          <div className=" flex gap-3 mt-2 justify-between">
            <button className="flex justify-center items-center w-1/2 p-2 pl-4 pr-4 border-2 border-white font-bold rounded-full">
              Beginner
            </button>
            <button className="flex justify-center items-center bg-green-700 p-2 w-1/2 pl-4 pr-4 text-white font-bold rounded-full">
              Dev
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
