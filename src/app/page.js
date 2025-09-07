import MainContent from "@/components/header/MainContent";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/Contact";
import MainSkills from "@/components/mainSkills/MainSkills";
import ExperienceSection from "@/components/experience/ExperienceSection";
import Loading from "@/components/header/Loading";

export default function Home() {
  return (
    <>
      <Loading />
      <div className="flex flex-col justify-start gap-10 items-center min-h-screen overflow-y-auto w-full  lg:max-w-[800px] xl:max-w-[1000px]">
        <MainContent />
        <MainSkills />
        <Skills />
        {/*    <ExperienceSection /> */}
        <Contact />
      </div>
    </>
  );
}
