"use client";
import React from "react";
import { ArrowDownIcon } from "../Icons/icons";

export default function ArrowButton({ nextHash, isLastSection = false, text }) {
  return (
    <div className=" flex flex-col items-center justify-center gap-8 pt-28">
      <button
        className={`bg-primary rounded-full  hover:bg-primary/80 transition-all duration-300 h-[70px] w-[70px] flex items-center justify-center ${
          isLastSection && "rotate-180"
        }`}
        onClick={() => (window.location.hash = nextHash)}
      >
        <ArrowDownIcon />
      </button>
      <p className="text-white text-h2 uppercase font-semibold gradient-bg px-2">
        {text}
      </p>
    </div>
  );
}
