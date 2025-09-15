"use client";
import React, { useState, useEffect, useRef } from "react";
import ArrowButton from "../layout/ArrowButton";
import Bubbles from "../Icons/Bubbles";

export default function MainSkills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skills = [
    {
      title: "FRONTEND DEVELOPER",
      description: [
        "Javascript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML - CSS",
        "Typescript",
      ],
    },
    {
      title: "UX/UI DESIGNER",
      description: ["Figma", "After Effects", "Photoshop", "Illustrator"],
    },
    {
      title: "BACKEND DEVELOPER",
      description: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "SOFT SKILLS",
      description: [
        "Team player",
        "Comunicativa",
        "Resolutiva",
        "Proactiva",
        "Creativa",
      ],
    },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      id="mainSkills"
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-14 md:py-20 lg:py-24  w-full"
    >
      <section className="relative flex flex-col items-center justify-center gap-4 text-[var(--color-text)] w-full">
        {/* Bubbles de fondo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Bubbles
            image="/javascript.svg"
            animation="animate-bubble-fall-1"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/html.svg"
            animation="animate-bubble-fall-2"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/css.svg"
            animation="animate-bubble-fall-3"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/react.svg"
            animation="animate-bubble-fall-4"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/tailwind.svg"
            animation="animate-bubble-fall-5"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/next.svg"
            animation="animate-bubble-fall-6"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/github.png"
            animation="animate-bubble-fall-7"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/postm.png"
            animation="animate-bubble-fall-8"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/vercel.svg"
            animation="animate-bubble-fall-9"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/nodejs.png"
            animation="animate-bubble-fall-10"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/mongodb.png"
            animation="animate-bubble-fall-11"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/express.png"
            animation="animate-bubble-fall-12"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/figmma.png"
            animation="animate-bubble-fall-13"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/typescript.png"
            animation="animate-bubble-fall-14"
            zIndex={-1}
            isFalling={true}
          />
          <Bubbles
            image="/redux.png"
            animation="animate-bubble-fall-15"
            zIndex={-1}
            isFalling={true}
          />
        </div>

        {/* Contenido de habilidades */}
        <div className="relative z-10 flex flex-col items-center justify-center gap-4 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col transition-all duration-700 ease-out transform ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              } bg-[var(--color-text)]/5 rounded-1em p-4 w-full ${
                index % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <h3 className="text-h2 font-semibold text-[var(--color-primary)]">
                {skill.title}
              </h3>
              {skill.description.map((description, index) => (
                <span key={index} className="inline-block text-h5 font-normal">
                  {description}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <ArrowButton nextHash="#skills" text="Logros" />
    </div>
  );
}
