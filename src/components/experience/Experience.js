"use client";
import React, { useState } from "react";
import Image from "next/image";
import { OpenEyeIcon, CloseEyeIcon } from "../Icons/icons";

export default function Experience({ experience }) {
  const [openImages, setOpenImages] = useState({});
  const [showingOpenEye, setShowingOpenEye] = useState({});

  const toggleImage = (index) => {
    setShowingOpenEye((prev) => ({
      ...prev,
      [index]: true,
    }));

    setTimeout(() => {
      setShowingOpenEye((prev) => ({
        ...prev,
        [index]: false,
      }));
      setOpenImages((prev) => ({
        ...prev,
        [index]: true,
      }));
    }, 1500);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      <h2 className="text-h2 font-semibold text-left text-[var(--color-text)]">
        {experience.title}
      </h2>
      <div className="w-full lg:w-[370px] h-[200px] flex flex-row gap-2 items-center justify-center">
        {experience.children.map((child, index) => (
          <div key={index} className="relative w-full h-full">
            <Image
              src={child.img}
              alt={experience.title + "imagen numero" + index}
              width={200}
              height={200}
              className="w-full h-full object-cover rounded-1em cursor-pointer"
              quality={100}
              priority={false}
              onMouseEnter={() => !openImages[index] && toggleImage(index)}
            />
            {!openImages[index] && (
              <div
                className={`absolute inset-0 bg-[var(--color-primary)]/50 rounded-1em flex items-center justify-center cursor-pointer transition-all duration-1000 ease-out hover:bg-[var(--color-primary)]/60 ${
                  showingOpenEye[index]
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
                onClick={() => toggleImage(index)}
              >
                {showingOpenEye[index] ? (
                  <div className="transition-all duration-500 ease-out animate-pulse">
                    <OpenEyeIcon />
                  </div>
                ) : (
                  <div className="transition-all duration-300 ease-out">
                    <CloseEyeIcon />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end justify-end  w-full">
        <h4 className="text-h3  font-semibold text-[var(--color-text)]">
          {experience.role}
        </h4>
        {experience.link && (
          <a
            target="_blank"
            href={experience.link}
            className="text-extralight text-h5  text-[var(--color-text)] underline"
          >
            Sitio web
          </a>
        )}
      </div>
    </div>
  );
}
