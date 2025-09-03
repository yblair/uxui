import React from "react";

export default function MainSkills() {
  const skills = [
    {
      title: "FRONTEND DEVELOPER",
      description: [
        "Javascript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML - CSS",
        "Typescript",
      ],
    },
    {
      title: "UX/UI DESIGNER",
      description: ["Figma", "After Effects", "Photoshop", "Illustrator"],
    },
    {
      title: "BACKEND DEVELOPER",
      description: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      title: "SOFT SKILLS",
      description: [
        "Team player",
        "Comunicativa",
        "Resolutiva",
        "Proactiva",
        "Creativa",
      ],
    },
  ];
  return (
    <section
      id="mainSkills"
      className="flex flex-col items-center justify-center pt-28 gap-4 w-full text-white"
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`flex flex-col  bg-primary/30 rounded-1em p-4 w-full  ${
            index % 2 === 0 ? "items-start" : "items-end"
          }`}
        >
          <h3 className="text-h3 font-semibold">{skill.title}</h3>
          {skill.description.map((description, index) => (
            <span key={index} className="inline-block text-h5 font-normal">
              {description}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}
