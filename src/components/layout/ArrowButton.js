"use client";
import React, { useState } from "react";
import { ArrowDownIcon } from "../Icons/icons";

export default function ArrowButton({ nextHash, isLastSection = false, text }) {
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (e, hash) => {
    if (isScrolling) return;
    e.stopPropagation();
    const element = document.querySelector(hash);
    if (element) {
      setIsScrolling(true);

      // Actualizar el hash para que Navbar se entere
      window.history.pushState(null, null, hash);

      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Disparar evento hashchange para que Navbar se actualice
      window.dispatchEvent(new HashChangeEvent("hashchange"));

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center gap-8 pt-20 w-full ">
      <button
        className={`bg-primary rounded-full animate-pulse   -translate-y-1/2 hover:bg-primary/80 transition-all duration-300 h-[70px] w-[70px] flex items-center justify-center ${
          isLastSection && "rotate-180"
        } ${isScrolling ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}`}
        onClick={(e) => !isScrolling && scrollToSection(e, nextHash)}
      >
        <ArrowDownIcon />
      </button>
      <div
        className={`gradient-bg min-w-full min-h-[100px] lg:min-h-[150px] flex items-center justify-center absolute mt-50 cursor-pointer transition-all duration-300 ${
          isScrolling ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
        }`}
        onClick={(e) => !isScrolling && scrollToSection(e, nextHash)}
      >
        <h2 className="text-white text-h2 uppercase font-semibold px-2">
          {text}
        </h2>
      </div>
    </div>
  );
}
