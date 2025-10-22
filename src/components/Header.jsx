import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { Freckle_Face } from "next/font/google"

const frecleFace = Freckle_Face({
  weight: "400"
});

export default function Header()
{
    return(
        <nav className="fixed z-20 border-b-[0.5px] bg-black/15 backdrop-blur-2xl border-neutral-700 h-[80px] shadow-neutral-800 shadow-2xl w-dvw flex justify-center items-center">
            <h1 className={`text-white text-3xl sm:text-4xl tracking-wider ${frecleFace.className} `}>&lt;SHARVANTH RAPOLU/&gt;</h1>
        </nav>
    );
}