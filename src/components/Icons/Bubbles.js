"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Bubbles({
  image,
  animation,
  zIndex = 0,
  isFalling = false,
}) {
  const [randomPosition, setRandomPosition] = useState({
    left: "0%",
    top: "0%",
  });

  useEffect(() => {
    if (isFalling) {
      setRandomPosition({
        left: `${Math.random() * 100}%`,
        top: "0%",
      });
    }
  }, [isFalling]);

  return (
    <div
      className={`w-[50px] h-[50px] flex justify-center items-center absolute z-[${zIndex}] rounded-full bg-[var(--color-secondary)]/80 backdrop-blur-sm overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-lg ${animation}`}
      style={isFalling ? randomPosition : {}}
    >
      <Image
        src={image}
        alt="Tech icon"
        width={30}
        height={30}
        className="object-contain"
      />
    </div>
  );
}
