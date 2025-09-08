import React from "react";

export default function Title() {
  return (
    <div className="absolute lg:static z-20  xl:z-0 -translate-y-10 md:translate-x-28 xl:!translate-x-0 ">
      <h1 className="text-h1 lg:text-h1-lg font-semibold   text-[var(--color-text)]">
        Hi! I&apos;m Yamila, <br />{" "}
        <span className="gradient-bg px-2">Frontend developer</span> <br />{" "}
        <span className="gradient-bg px-2">& UI/UX Designer</span>
      </h1>
    </div>
  );
}
