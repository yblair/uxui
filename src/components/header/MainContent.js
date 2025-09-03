import React from "react";
import ImageYamila from "./Image";
import Title from "./Title";
import Description from "./Description";
import Section from "../sections/Section";
import { CodeIcon, UXIcon } from "@/components/Icons/icons";
import ArrowButton from "../layout/ArrowButton";

export default function MainContent() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center pt-20 pb-28"
    >
      <div className="flex flex-row items-center justify-center pt-10">
        <div className="w-full absolute z-30 pl-6 lg:pl-[30%] pt-8 lg:pt-0">
          <Title />
        </div>
        <ImageYamila />
      </div>
      <Description text="Desarrolladora frontend apasionada por la tecnología, con experiencia creando soluciones integrales que combinan funcionalidad y diseño." />
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
        <Section
          img={<CodeIcon />}
          title="Developer"
          description="Desarrollo frontend Semi Senior. React - Next - Redux - Tailwind CSS."
        />
        <Section
          img={<UXIcon />}
          title="UX/UI Designer"
          description="Diseño de experiencia e interfaz de usuario. Figma - After effects"
        />
      </div>
      <ArrowButton nextHash="#mainSkills" text="Habilidades principales" />
    </section>
  );
}
