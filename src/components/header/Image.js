import React from "react";
import Image from "next/image";
import Bubbles from "../Icons/Bubbles";

export default function ImageYamila() {
  return (
    <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] flex items-center justify-center ">
      <div className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-3 border-[var(--color-primary)]/30 ">
        <Image
          src="/yami.PNG"
          alt="Profile"
          width={450}
          height={450}
          className="scale-120 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
        />
      </div>
      <Bubbles image="/javascript.svg" animation="animate-float-1" />
      <Bubbles image="/html.svg" animation="animate-float-2" />
      <Bubbles image="/css.svg" animation="animate-float-3" />
      <Bubbles image="/react.svg" animation="animate-float-4" />
      <Bubbles image="/tailwind.svg" animation="animate-float-5" />
    </div>
  );
}
