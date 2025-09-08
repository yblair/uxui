"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Section({
  img,
  title = "Developer",
  description = "Desarrollo frontend Semi Senior. React - Next - Redux - Tailwind CSS.",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          setTimeout(() => {
            setShowDescription(true);
          }, 1500);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={` flex flex-row items-center justify-start gap-4 rounded-1em p-4 bg-[var(--color-primary)]/30 w-full transition-all   duration-700 ease-out transform ${
        isVisible ? "opacity-100  scale-100" : "opacity-0  scale-95"
      }`}
    >
      <div className="h-[53px] min-w-[53px] rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
        {img}
      </div>
      <div className="flex flex-col items-start justify-center gap-1 ">
        <h3 className="text-h3 text-[var(--color-text)] font-semibold">
          {title}
        </h3>
        <p
          className={`text-h5 text-[var(--color-text)] font-extralight transition-all duration-1000 ease-out transform overflow-hidden ${
            showDescription
              ? "opacity-100 scale-100 translate-y-0 max-h-20"
              : "opacity-0 scale-95 translate-y-4 max-h-0"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
