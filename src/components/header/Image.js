import React from "react";
import Image from "next/image";

export default function ImageYamila() {
  return (
    <div className="relative w-[300px] h-[300px] flex items-center justify-center translate-x-10">
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-3 border-primary/30 ">
        <Image
          src="/yami.PNG"
          alt="Profile"
          width={300}
          height={300}
          className="scale-120"
        />
      </div>

      <div className="w-[40px] h-[40px] absolute z-0 rounded-full bg-secondary overflow-hidden border-3 border-primary/30 animate-float-1">
        <Image src="/javascript.svg" alt="JavaScript" width={40} height={40} />
      </div>
      <div className="w-[40px] h-[40px] absolute  rounded-full bg-secondary overflow-hidden border-3 border-primary/30 animate-float-2">
        <Image src="/html.svg" alt="HTML" width={40} height={40} />
      </div>
      <div className="w-[40px] h-[40px] absolute rounded-full bg-secondary overflow-hidden border-3 border-primary/30 animate-float-3">
        <Image src="/css.svg" alt="CSS" width={40} height={40} />
      </div>
      <div className="w-[40px] h-[40px] absolute rounded-full bg-secondary overflow-hidden border-3 border-primary/30 animate-float-4">
        <Image src="/react.svg" alt="React" width={40} height={40} />
      </div>
      <div className="w-[40px] h-[40px] absolute flex justify-center items-center rounded-full bg-secondary overflow-hidden border-3 border-primary/30 animate-float-5">
        <Image src="/tailwind.svg" alt="Tailwind" width={40} height={40} />
      </div>
    </div>
  );
}
