import React from "react";
import Experience from "./Experience";
import ArrowButton from "../layout/ArrowButton";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Universidad America Latina",
      role: "Frontend Developer / UI/UX Designer",
      link: "https://ual.milktech.io/",
      children: [
        {
          img: "/ual.png",
        },
      ],
    },
    {
      title: "Administrador",
      role: "UI Developer",
      link: "https://ylair-admin.netlify.app/",
      children: [
        {
          img: "/admin.png",
        },
      ],
    },
    {
      title: "Apuestas online",
      role: "UI Developer",
      children: [
        {
          img: "/betting.png",
        },
        {
          img: "/betting2.png",
        },
      ],
    },
    {
      title: "E-Commerce",
      role: "Frontend Developer / UI/UX Designer",
      link: "https://demo.milktech.io/",
      children: [
        {
          img: "/market.png",
        },
        {
          img: "/market2.png",
        },
      ],
    },
    {
      title: "Backoffice Multitenant",
      role: "Frontend Developer",
      link: "https://my.revolucionz.com/",
      children: [
        {
          img: "/backof.png",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-14 md:py-20 w-full">
      <section
        id="experience"
        className="flex flex-col lg:grid lg:grid-cols-2 items-center justify-center lg:items-start gap-12 "
      >
        {experiences.map((experience, index) => (
          <Experience key={index} experience={experience} />
        ))}
      </section>
      <ArrowButton nextHash="#contact" text="Contacto" />
    </div>
  );
}
