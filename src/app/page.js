import Navbar from "@/components/layout/Navbar";
import MainContent from "@/components/header/MainContent";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/Contact";
import MainSkills from "@/components/mainSkills/MainSkills";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen overflow-y-auto w-full ">
      <Navbar />
      <MainContent />
      <MainSkills />
      <Skills />
      <Contact />
    </div>
  );
}
