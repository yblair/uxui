"use client";
import { useEffect, useState } from "react";
import MainContent from "@/components/header/MainContent";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/Contact";
import MainSkills from "@/components/mainSkills/MainSkills";
import ExperienceSection from "@/components/experience/ExperienceSection";
import Loading from "@/components/header/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [colorsLoaded, setColorsLoaded] = useState(false);

  useEffect(() => {
    // Aplicar colores inmediatamente para evitar flash
    const defaultColors = {
      "--color-primary": "#b9529a",
      "--color-secondary": "#232a3b",
      "--color-text": "#fff",
    };

    const storageKeys = {
      primaryColor: "--color-primary",
      secondaryColor: "--color-secondary",
      textColor: "--color-text",
    };

    Object.entries(storageKeys).forEach(([storageKey, cssVar]) => {
      const storedColor = localStorage.getItem(storageKey);
      const colorToUse = storedColor || defaultColors[cssVar];
      document.documentElement.style.setProperty(cssVar, colorToUse);
    });

    setColorsLoaded(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !colorsLoaded) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-start gap-10 items-center min-h-screen overflow-y-auto w-full  lg:max-w-[800px] xl:max-w-[1000px]">
      <MainContent />
      <MainSkills />
      <Skills />
      {/*    <ExperienceSection /> */}
      <Contact />
    </div>
  );
}
