import React from "react";

export default function Section({
  img,
  title = "Developer",
  description = "Desarrollo frontend Semi Senior. React - Next - Redux - Tailwind CSS.",
}) {
  return (
    <div className="flex flex-row items-center justify-center gap-4 rounded-1em p-4 bg-primary/30">
      <div className="h-[53px] min-w-[53px] rounded-full bg-secondary flex items-center justify-center">
        {img}
      </div>
      <div className="flex flex-col items-start justify-center gap-1 ">
        <h3 className="text-h3 text-white font-semibold">{title}</h3>
        <p className="text-h5 text-white">{description}</p>
      </div>
    </div>
  );
}
