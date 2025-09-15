"use client";

import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import ColorPicker from "@rc-component/color-picker";
import "@rc-component/color-picker/assets/index.css";

const Picker = forwardRef((props, ref) => {
  const [selectedColors, setSelectedColors] = useState({
    primary: "#b9529a",
    secondary: "#181A21",

    text: "#fff",
  });

  const [currentColorType, setCurrentColorType] = useState("primary");
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    showModal: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
        // Cargar colores del localStorage al abrir el modal
        const colors = {
          primary: localStorage.getItem("primaryColor") || "#b9529a",
          secondary: localStorage.getItem("secondaryColor") || "#181A21",
          text: localStorage.getItem("textColor") || "#fff",
        };
        setSelectedColors(colors);
      }
    },
    close: () => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    },
  }));

  const handleColorChange = (color) => {
    const hexColor = color.toHexString();
    setSelectedColors((prev) => ({
      ...prev,
      [currentColorType]: hexColor,
    }));
  };

  const saveColors = () => {
    // Guardar en localStorage
    localStorage.setItem("primaryColor", selectedColors.primary);
    localStorage.setItem("secondaryColor", selectedColors.secondary);
    localStorage.setItem("textColor", selectedColors.text);

    // Aplicar colores al documento
    document.documentElement.style.setProperty(
      "--color-primary",
      selectedColors.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      selectedColors.secondary
    );
    document.documentElement.style.setProperty(
      "--color-text",
      selectedColors.text
    );

    // Cerrar el dialog
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const resetColors = () => {
    const defaultColors = {
      primary: "#b9529a",
      secondary: "#181A21",

      text: "#fff",
    };
    setSelectedColors(defaultColors);
  };

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:bg-black/20 bg-transparent backdrop:backdrop-blur-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   max-w-4xl max-h-[90vh] overflow-y-auto rounded-1em "
      onClose={handleClose}
    >
      <div className="w-full flex flex-col text-[var(--color-text)] bg-[var(--color-secondary)]  p-6">
        {/* Header */}
        <div className="flex justify-between w-full border-b border-white/10 items-center mb-6">
          <h2 className="text-h2 font-semibold uppercase">Editar Colores</h2>
          <button
            onClick={handleClose}
            className="text-text hover:text-primary transition-all text-2xl w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
          {/* Color Picker Section */}
          <div className="space-y-4">
            {/* Color Picker */}
            <div className="flex justify-center p-4 bg-white/5 rounded-1em border border-white/10">
              <ColorPicker
                value={selectedColors[currentColorType]}
                onChange={handleColorChange}
                showText
                size="large"
              />
            </div>

            {/* Current Color Display */}
            <div className="mt-4 p-4 bg-[var(--color-primary)]/60 rounded-lg">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded-lg border-2 border-white/20"
                  style={{ backgroundColor: selectedColors[currentColorType] }}
                />
                <div>
                  <p className="text-text font-medium">
                    {currentColorType === "primary" && "Color Primario"}
                    {currentColorType === "secondary" && "Color Secundario"}

                    {currentColorType === "text" && "Color de Texto"}
                  </p>
                  <p className="text-text/70 text-sm">
                    {selectedColors[currentColorType]}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selected Colors Preview */}
          <div className="">
            <div className=" lg:space-y-4">
              {Object.entries(selectedColors).map(([key, color]) => (
                <div
                  key={key}
                  className="flex items-center gap-4 p-4  rounded-lg"
                >
                  <div
                    className="w-10 h-10 rounded-lg border-2 border-white/20 flex-shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <div className="flex-1">
                    <h4 className="text-h4 font-regular capitalize">
                      {key === "primary" && "Color Primario"}
                      {key === "secondary" && "Color Secundario"}

                      {key === "text" && "Color de Texto"}
                    </h4>
                    <p className="hidden lg:flex text-h5 font-extralight">
                      {color}
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentColorType(key)}
                    className="px-4 py-2 bg-[var(--color-primary)]/50 rounded-lg hover:bg-primary/80 transition-all text-sm font-medium shadow-lg hover:shadow-primary/25"
                  >
                    Editar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end gap-4 lg:mt-8 pt-4 lg:pt-6 w-full border-t border-white/10">
          <button
            onClick={resetColors}
            className="px-6 py-3   text-[var(--color-text)] rounded-1em  transition-all border border-white/10 hover:border-white/20 font-semibold"
          >
            Restablecer
          </button>
          <button
            onClick={saveColors}
            className="px-6 py-3  bg-[var(--color-primary)] text-white rounded-1em hover:bg-primary/80 transition-all font-semibold shadow-lg hover:shadow-primary/25"
          >
            Guardar
          </button>
        </div>
      </div>
    </dialog>
  );
});

Picker.displayName = "Picker";

export default Picker;
