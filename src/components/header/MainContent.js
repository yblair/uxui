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
      className="flex  flex-col text-[var(--color-text)] items-center justify-center py-14 md:py-20 lg:py-20  gap-8"
    >
      <div className="flex flex-row  items-center justify-center  py-4 xl:py-14 xl:px-10">
        <div className="w-full flex flex-col   absolute xl:static  z-30 xl:z-0 pl-6 xl:pl-0 pt-8 xl:pt-0">
          <Title />
          <div className="w-full hidden xl:flex ">
            <Description
              position="text-left"
              text="Desarrolladora frontend apasionada por la tecnología, con experiencia creando soluciones integrales que combinan funcionalidad y diseño."
            />
          </div>
        </div>
        <ImageYamila />
      </div>
      <div className="w-full flex xl:hidden items-center justify-center">
        <Description text="Desarrolladora frontend apasionada por la tecnología, con experiencia creando soluciones integrales que combinan funcionalidad y diseño." />
      </div>
      <div className="flex  w-full flex-col md:flex-row items-center justify-center gap-4">
        <Section
          img={<CodeIcon />}
          title="DEVELOPER"
          description="Desarrollo frontend Semi Senior. React - Next - Redux - Tailwind CSS."
        />
        <Section
          img={<UXIcon />}
          title="UX/UI DESIGNER"
          description="Diseño de experiencia e interfaz de usuario. Figma - After effects"
        />
      </div>
      <ArrowButton nextHash="#mainSkills" text="Habilidades principales" />
    </section>
  );
}
