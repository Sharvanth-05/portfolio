import React from "react";
import Header from "./Header";
import BottomBar from "./BottomBar";
import Intro from "./Intro";

export default function Home()
{
    return(
        <div className="bg-black w-dvw flex flex-col overflow-x-hidden">
            <Intro />   
        </div>
    );
}