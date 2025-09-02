import React from "react";

export default function Button({ image }) {
  return (
    <button className="hover:bg-primary/20 hover:rounded-1em p-3 cursor-pointer">
      {image}
    </button>
  );
}
