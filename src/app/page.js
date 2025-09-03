import MainContent from "@/components/header/MainContent";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/Contact";
import MainSkills from "@/components/mainSkills/MainSkills";

export default function Home() {
  return (
    <div className="flex flex-col justify-start gap-10 items-center min-h-screen overflow-y-auto w-full  lg:max-w-[800px]">
      <MainContent />
      <MainSkills />
      <Skills />
      <Contact />
    </div>
  );
}
