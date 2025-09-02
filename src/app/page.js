import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Header from "@/components/header/Header";
import Section from "@/components/sections/Section";
import { CodeIcon, UXIcon } from "@/components/Icons/icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <Header />
      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <Section
          img={<CodeIcon />}
          title="Developer"
          description="Desarrollo frontend Semi Senior. React - Next - Redux - Tailwind CSS."
        />
        <Section
          img={<UXIcon />}
          title="UX/UI Designer"
          description="Diseño de experiencia e interfaz de usuario. Figma - After effects"
        />
      </div>
    </div>
  );
}
