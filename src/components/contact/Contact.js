import React from "react";
import Image from "next/image";
import { DownloadIcon } from "../Icons/icons";
import Button from "../layout/Button";
import ArrowButton from "../layout/ArrowButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center pt-28 pb-20 gap-6 w-full"
    >
      <div className="w-[350px] h-[350px] rounded-full overflow-hidden  bg-gradient-to-b from-primary to-secondary ">
        <Image src="/yami.PNG" alt="Contact" width={350} height={350} />
      </div>
      <p className="text-h5 text-white text-center px-8 font-extralight">
        Me dedico al desarrollo de software frontend, construyo y gestiono las
        interfaces para garantizar la mejor experiencia de usuario. Estoy
        abierta a nuevas oportunidades en donde pueda contribuir, aprender y
        crecer.
      </p>
      <div className="flex flex-col items-center justify-center rounded-1em p-2 gap-2 ">
        <Button
          image={<DownloadIcon />}
          href="#contact"
          text="Descargar CV"
          link="https://drive.google.com/file/d/1cN7BKeQrRTULKgktwfxU1EIb9yOjDr8C/view?usp=drive_link"
        />
        <Button
          image={
            <Image src="/linkedin.png" alt="Linkedin" width={24} height={24} />
          }
          href="#contact"
          text="Linkedin"
          link="https://www.linkedin.com/in/yamila-belen-lair/"
        />
        <Button
          image={
            <Image src="/github.png" alt="Github" width={24} height={24} />
          }
          href="#contact"
          text="Github"
          link="https://github.com/yblair"
        />
      </div>
      <ArrowButton
        nextHash="#home"
        text="Volver al inicio"
        isLastSection={true}
      />
    </section>
  );
}
