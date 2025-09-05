import React from "react";
import Section from "../sections/Section";
import {
  MonitorIcon,
  StatsIcon,
  ChartIcon,
  APIIcon,
  BrushIcon,
  TextIcon,
  MedalIcon,
  DetailChartIcon,
  LanguageIcon,
  UXIcon,
} from "../Icons/icons";
import ArrowButton from "../layout/ArrowButton";

export default function skills() {
  const skills = [
    {
      title: "PIXEL - PERFECT",
      description:
        "Diseño pixel-perfect. Desarrollo de sitios 100% responsive.",
      icon: <BrushIcon />,
    },
    {
      title: "INTERNACIONALIZACIÓN",
      description: "Sitios multi-idiomas para mayor alcance de usuarios.",
      icon: <LanguageIcon />,
    },
    {
      title: "PERFORMANCE",
      description: "Optimizacion con lazy loading, componentes de next y SSR.",
      icon: <DetailChartIcon />,
    },
    {
      title: "SEO",
      description: "Incremento de visibilidad (posicionamiento web)",
      icon: <MedalIcon />,
    },
    {
      title: "ACCESIBILIDAD",
      description:
        "Buenas practicas y accesibilidad A11Y para usuarios con discapacidades.",
      icon: <TextIcon />,
    },
    {
      title: "CUSTOMIZACIÓN",
      description: "Sitios con branding, tema y modos customizables.",
      icon: <UXIcon />,
    },
    {
      title: "DISEÑO UX/UI",
      description: "Diseño de componentes en figma.",
      icon: <BrushIcon />,
    },
    {
      title: "INTEGRACIONES",
      description: "Consumo de APIs RESTful.",
      icon: <APIIcon />,
    },
    {
      title: "ESTADOS",
      description:
        "Uso de react hooks - context - redux para gestionar estados.",
      icon: <StatsIcon />,
    },
    {
      title: "SSR - CSR",
      description:
        "Diferentes tipos de renderizado segun necesidades del cliente.",
      icon: <MonitorIcon />,
    },
    {
      title: "VISUALIZACIÓN",
      description: "Graficos y animaciones",
      icon: <ChartIcon />,
    },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center py-14 md:py-20 w-full"
      id="skills"
    >
      <section
        className="grid grid-cols-1 md:grid-cols-2 justify-items-center 
       w-full gap-4 "
      >
        {skills.map((skill, index) => (
          <Section
            key={index}
            title={skill.title}
            description={skill.description}
            img={skill.icon}
          />
        ))}
      </section>
      <ArrowButton nextHash="#contact" text="Contacto" />
    </div>
  );
}
