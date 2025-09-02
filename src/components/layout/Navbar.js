import React from "react";
import {
  UserIcon,
  WorkIcon,
  TrophyIcon,
  MailIcon,
  NotebookIcon,
} from "@/components/Icons/icons";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="bg-secondary-50 w-full rounded-1em h-16 flex items-center justify-between">
      <div className="flex px-3 items-center mx-auto gap-6">
        <Button image={<UserIcon />} />
        <Button image={<NotebookIcon />} />
        <Button image={<WorkIcon />} />
        <Button image={<TrophyIcon />} />
        <Button image={<MailIcon />} />
      </div>
    </div>
  );
}
