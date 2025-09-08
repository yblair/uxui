"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  UserIcon,
  WorkIcon,
  TrophyIcon,
  MailIcon,
  NotebookIcon,
  UXIcon,
  LanguageIcon,
} from "@/components/Icons/icons";
import Button from "./Button";
import Picker from "../picker/Picker";

export default function Navbar() {
  const [currentHash, setCurrentHash] = useState("");
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const getCurrentSection = useCallback(() => {
    const sections = ["#home", "#mainSkills", "#skills", "#contact"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.querySelector(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.pageYOffset;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          return section;
        }
      }
    }
    return "#home";
  }, []);

  const navigateToSection = useCallback((hash) => {
    const element = document.querySelector(hash);
    if (element) {
      window.history.pushState(null, null, hash);

      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setCurrentHash(hash);
    }
  }, []);

  useEffect(() => {
    setCurrentHash(window.location.hash || "#home");

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    const handleScroll = () => {
      const currentSection = getCurrentSection();
      setCurrentHash((prevHash) => {
        if (currentSection !== prevHash) {
          return currentSection;
        }
        return prevHash;
      });
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getCurrentSection]);

  useEffect(() => {
    if (currentHash && window.location.hash !== currentHash) {
      window.history.replaceState(null, null, currentHash);
    }
  }, [currentHash]);

  return (
    <>
      <div className="bg-[var(--color-secondary)]/60 fixed z-40   backdrop-blur-sm w-[calc(100%-2.5rem)]  rounded-1em h-16 flex items-center justify-center">
        <div className="w-full flex items-center justify-between lg:max-w-[800px] xl:max-w-[1000px]">
          <nav className="flex px-3 items-center justify-center  gap-[4%] ">
            <Button
              image={
                <UserIcon
                  color={
                    currentHash === "#home"
                      ? "var(--color-primary)"
                      : "var(--color-text)"
                  }
                />
              }
              href="#home"
              onClick={() => navigateToSection("#home")}
            />
            <Button
              image={
                <NotebookIcon
                  color={
                    currentHash === "#mainSkills"
                      ? "var(--color-primary)"
                      : "var(--color-text)"
                  }
                />
              }
              href="#mainSkills"
              onClick={() => navigateToSection("#mainSkills")}
            />
            {/*     <Button
          image={
            <WorkIcon
              color={
                currentHash === "#experience" ? "var(--color-primary)" : "var(--color-text)"
              }
            />
          }
          href="#experience"
          /> */}
            <Button
              image={
                <TrophyIcon
                  color={
                    currentHash === "#skills"
                      ? "var(--color-primary)"
                      : "var(--color-text)"
                  }
                />
              }
              href="#skills"
              onClick={() => navigateToSection("#skills")}
            />
            <Button
              image={
                <MailIcon
                  color={
                    currentHash === "#contact"
                      ? "var(--color-primary)"
                      : "var(--color-text)"
                  }
                />
              }
              href="#contact"
              onClick={() => navigateToSection("#contact")}
            />
          </nav>
          <div className="flex items-center justify-center px-3 gap-6">
            <button
              className="hover:bg-[var(--color-primary)]/20 hover:rounded-1em p-3 cursor-pointer"
              onClick={() => setIsPickerOpen(true)}
            >
              <UXIcon color="var(--color-primary)" />
            </button>
            {/*          <button className="hover:bg-[var(--color-primary)]/20 hover:rounded-1em p-3 cursor-pointer">
              <LanguageIcon color="var(--color-primary)" />
            </button> */}
          </div>
        </div>
      </div>
      {isPickerOpen && (
        <Picker isOpen={isPickerOpen} onClose={() => setIsPickerOpen(false)} />
      )}
    </>
  );
}
