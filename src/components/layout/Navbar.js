"use client";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-secondary-50/80 fixed z-50  backdrop-blur-sm w-[calc(100%-2.5rem)]  rounded-1em h-16 flex items-center justify-between">
      <nav className="flex px-3 items-center justify-center mx-auto gap-[4%]">
        <Button
          image={
            <UserIcon
              color={currentHash === "#home" ? "var(--color-primary)" : "#fff"}
            />
          }
          href="#home"
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
        />
        {/*         <Button
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
        />
      </nav>
    </div>
  );
}
