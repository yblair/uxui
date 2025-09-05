"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  UserIcon,
  WorkIcon,
  TrophyIcon,
  MailIcon,
  NotebookIcon,
} from "@/components/Icons/icons";
import Button from "./Button";

export default function Navbar() {
  const [currentHash, setCurrentHash] = useState("");

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
    return "#home"; // Default
  }, []);

  // Función para navegar con scroll suave
  const navigateToSection = useCallback((hash) => {
    const element = document.querySelector(hash);
    if (element) {
      // Actualizar el hash
      window.history.pushState(null, null, hash);

      // Scroll suave
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Actualizar estado
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
    <div className="bg-secondary-50/80 fixed z-50  backdrop-blur-sm w-[calc(100%-2.5rem)]  rounded-1em h-16 flex items-center justify-between">
      <nav className="flex px-3 items-center justify-center mx-auto gap-[4%] ">
        <Button
          image={
            <UserIcon
              color={currentHash === "#home" ? "var(--color-primary)" : "#fff"}
            />
          }
          href="#home"
          onClick={() => navigateToSection("#home")}
        />
        <Button
          image={
            <NotebookIcon
              color={
                currentHash === "#mainSkills" ? "var(--color-primary)" : "#fff"
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
                currentHash === "#experience" ? "var(--color-primary)" : "#fff"
              }
            />
          }
          href="#experience"
        /> */}
        <Button
          image={
            <TrophyIcon
              color={
                currentHash === "#skills" ? "var(--color-primary)" : "#fff"
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
                currentHash === "#contact" ? "var(--color-primary)" : "#fff"
              }
            />
          }
          href="#contact"
          onClick={() => navigateToSection("#contact")}
        />
      </nav>
    </div>
  );
}
