import React from "react";
import Image from "next/image";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
export default function Skills() {
  return (
    <div className="mt-[70px] p-5 flex flex-col justify-center items-center">
      <div className="bg-transparent border-white border-b-1 p-2 pl-4 pr-4">
        <h1 className=" text-white brad text-center text-4xl sm:text-5xl font-bold">
          Skills
        </h1>
      </div>
      <div className="flex flex-wrap justify-around mt-5 p-5 gap-5">
        <Image src="/images/logos/java.png" alt="HTML5 Icon" width={65} height={65} />
        <Image
          src="/images/spring.png"
          alt="HTML5 Icon"
          width={65}
          height={65}
        />
        <Image
          src="/images/logos/pg.png"
          alt="postgresql Icon"
          width={65}
          height={65}
        />
        <Image src="/images/logos/html.png" alt="HTML5 Icon" width={65} height={65} />
        <Image src="/images/css.png" alt="Css Icon" width={65} height={65} />
        <Image
          src="/images/logos/js.png"
          alt="Java script Icon"
          width={65}
          height={65}
        />
        <Image
          src="/images/logos/node.png"
          alt="Nodejs Icon"
          width={65}
          height={65}
        />
        <Image
          src="/images/logos/express.png"
          alt="Expressjs Icon"
          width={65}
          height={65}
          style={{ backgroundColor: "white" }}
          className="border rounded-full"
        />
        <Image
          src="/images/logos/nextjs.png"
          alt="HTML5 Icon"
          width={65}
          height={65}
          style={{ backgroundColor: "white" }}
          className="border rounded-full"
        />
        <Image
          src="/images/logos/github.png"
          alt="Css Icon"
          width={65}
          height={65}
          style={{ backgroundColor: "white" }}
          className="border rounded-full"
        />
      </div>
    </div>
  );
}
