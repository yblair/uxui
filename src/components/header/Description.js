import React from "react";

export default function Description({ text, position = "text-center" }) {
  return (
    <div>
      <h4 className={`text-h4 text-white   ${position}`}>{text}</h4>
    </div>
  );
}
