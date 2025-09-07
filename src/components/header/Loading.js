"use client";

import React, { useState, useEffect } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ocultar el loading después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loading-screen">
      <div className="loading-gradient"></div>
    </div>
  );
}
