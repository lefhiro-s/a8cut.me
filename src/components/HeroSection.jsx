import React, { useMemo } from "react";
import Orbit from "./Orbit";
import { generateOrbitConfig } from "../utils/emojiOrbitGenerator";

export default function HeroSection() {
  const orbits = useMemo(() => generateOrbitConfig(), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-dark text-light"
      style={{
        backgroundImage: "url('/img/bg-hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-dark/80 z-0" />

      {/* Órbitas girando */}
      {orbits.map((orbit, i) => (
        <Orbit
          key={i}
          icons={orbit.icons}
          size={orbit.size}
          animation={orbit.animation}
        />
      ))}

      {/* Sutil lluvia de crumbs */}
      <div className="absolute inset-0 bg-[url('/assets/crumbs-bg.svg')] opacity-10 animate-slow-spin z-0 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center space-y-6">
        <img src="/img/logo-1.png" alt="Logo Bizzcuir" className="w-84 h-auto animate-pulse" />

        <p className="text-lg text-gray-300 italic">
          Haz click, Acaba, Limpia, Vuelve la próxima.
        </p>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-secondary text-dark rounded-md hover:bg-secondary-dark transition">
            Leer sin cuenta
          </button>
          <button className="px-6 py-3 bg-primary text-dark rounded-md hover:bg-primary-dark transition">
            Iniciar sesión
          </button>
          <a href="#features" className="px-6 py-3 bg-accent text-dark rounded-md hover:bg-accent-dark transition">
            Ver más
          </a>
        </div>

        <p className="text-sm text-gray-500">
          Recuerda borrar el historial. Nadie tiene que saber que estuviste acá.
        </p>
      </div>
    </section>
  );
}
