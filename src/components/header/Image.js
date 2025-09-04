import React from "react";
import Image from "next/image";
import Bubbles from "../Icons/Bubbles";

export default function ImageYamila() {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center ">
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-3 border-primary/30 ">
        <Image
          src="/yami.PNG"
          alt="Profile"
          width={300}
          height={300}
          className="scale-120"
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
