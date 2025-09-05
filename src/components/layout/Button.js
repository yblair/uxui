"use client";
import React from "react";

export default function Button({ image, href, text, link }) {
  return (
    <button
      className=" hover:bg-primary/20 hover:rounded-1em p-3 cursor-pointer"
      onClick={link && (() => window.open(link, "_blank"))}
    >
      <a
        href={href}
        className="flex flex-row items-center justify-center gap-2 text-white text-h5"
      >
        {image}
        {text ? text : ""}
      </a>
    </button>
  );
}
