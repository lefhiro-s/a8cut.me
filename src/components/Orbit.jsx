import React from "react";

const Orbit = ({
  icons = [],
  size = 500,
  animation = "orbit",
}) => {
  const radius = size / 2;

  // Determina la clase de animación
  const animClass =
    animation === "orbit"
      ? "animate-orbit"
      : animation === "orbit-reverse"
      ? "animate-orbit-reverse"
      : "";

  return (
    <div
      className={`absolute z-0 rounded-full pointer-events-none ${animClass}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      {icons.map((icon, idx) => {
        const angle = (360 / icons.length) * idx;
        const rad = (angle * Math.PI) / 180;
        const x = radius + radius * Math.cos(rad) - 16;
        const y = radius + radius * Math.sin(rad) - 16;
        return (
          <div
            key={idx}
            className="absolute text-3xl"
            style={{ left: `${x}px`, top: `${y}px` }}
          >
            {icon}
          </div>
        );
      })}
    </div>
  );
};

export default Orbit;
