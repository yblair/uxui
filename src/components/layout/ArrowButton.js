"use client";
import React from "react";
import { ArrowDownIcon } from "../Icons/icons";

export default function ArrowButton({ nextHash, isLastSection = false, text }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-8 pt-28 w-full ">
      <button
        className={`bg-primary rounded-full -translate-y-1/2  hover:bg-primary/80 transition-all duration-300 h-[70px] w-[70px] flex items-center justify-center ${
          isLastSection && "rotate-180"
        }`}
        onClick={() => (window.location.hash = nextHash)}
      >
        <ArrowDownIcon />
      </button>
      <div className="gradient-bg min-w-full min-h-[100px] lg:min-h-[150px] flex items-center justify-center absolute mt-50">
        <h2 className="text-white text-h2 uppercase font-semibold  px-2">
          {text}
        </h2>
      </div>
    </div>
  );
}
