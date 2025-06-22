// src/components/SpriteObserver.jsx
import React, { useEffect, useRef, useState } from "react";

const animationClasses = {
  slideTop: "translate-y-[-100px] opacity-0 group-hover:translate-y-0 group-hover:opacity-70",
  slideBottom: "translate-y-[100px] opacity-0 group-hover:translate-y-0 group-hover:opacity-70",
  slideLeft: "translate-x-[-100px] opacity-0 group-hover:translate-x-0 group-hover:opacity-70",
  slideRight: "translate-x-[100px] opacity-0 group-hover:translate-x-0 group-hover:opacity-70",
  fadeRotate: "opacity-0 rotate-[-15deg] group-hover:opacity-70 group-hover:rotate-0",
};

const SpriteObserver = ({
  src,
  type = "slideTop",
  offset = 100,
  position = "top: 100px; left: 80%;",
  className = "",
  comicOverlay = false, // Nuevo parámetro para la capa superior tipo cómic
  comicFrame = false, // Nuevo parámetro para el marco tipo cómic
}) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = window.scrollY;
      setParallaxOffset(scrollTop * 0.05); // Parallax effect factor

      if (rect.top < window.innerHeight - offset && rect.bottom > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return (
    <div 
      ref={ref}
      className="sprite-wrapper"
      style={{
        position: "absolute",
        transform: `translateY(${parallaxOffset}px)`,
        ...parseStyle(position),
      }}
    >
      {comicOverlay && <div className="comic-overlay" />}
      <div className={`sprite-container ${comicFrame ? "comic-frame" : ""}`}>
        <img
          src={src}
          alt="sprite"
          className={`pointer-events-none z-0 transition-all duration-700 ease-in-out
            ${visible ? "opacity-70 translate-x-0 rotate-0" : animationClasses[type]}
            ${className}`}
        />
      </div>
    </div>
  );
};

// Convert "top: 100px; left: 50%;" string to style object
function parseStyle(styleString) {
  return styleString.split(";").reduce((acc, rule) => {
    const [key, value] = rule.split(":").map(s => s.trim());
    if (!key || !value) return acc;
    const jsKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    acc[jsKey] = value;
    return acc;
  }, {});
}

export default SpriteObserver;

