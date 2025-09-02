import React from "react";
import ImageYamila from "./Image";
import Title from "./Title";
import Description from "./Description";
export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center pt-10">
        <div className="w-2/3 absolute right-28">
          <Title />
        </div>
        <ImageYamila />
      </div>
      <Description text="Desarrolladora frontend apasionada por la tecnología, con experiencia creando soluciones integrales que combinan funcionalidad y diseño." />
    </div>
  );
}
