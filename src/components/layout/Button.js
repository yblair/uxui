"use client";
import React from "react";

export default function Button({ image, href, text, link, onClick }) {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    } else if (link) {
      e.preventDefault();
      window.open(link, "_blank");
    }
  };

  return (
    <button
      className=" hover:bg-[var(--color-primary)]/20 hover:rounded-1em p-3 cursor-pointer"
      onClick={handleClick}
    >
      <a
        href={href}
        className="flex flex-row items-center justify-center gap-2 text-[var(--color-text)] text-h5"
      >
        {image}
        {text ? text : ""}
      </a>
    </button>
  );
}
