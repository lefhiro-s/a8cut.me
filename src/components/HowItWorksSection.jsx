// src/components/HowItWorksSection.jsx
import React from "react";
import {
  FaMousePointer,
  FaUserSecret,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaMousePointer className="text-primary w-10 h-10 mb-4 animate-pulse" />,
    title: "Busca tu tentación",
    description:
      "Sabes lo que quieres. O lo vas a descubrir. Igual vas a hacer clic.",
  },
  {
    icon: <FaUserSecret className="text-secondary w-10 h-10 mb-4 animate-fade-slow" />,
    title: "Haz lo tuyo",
    description:
      "Lee. Mira. Toca. Reacciona. No disimules, sabemos por qué entraste.",
  },
  {
    icon: <FaClock className="text-accent-dark w-10 h-10 mb-4 animate-pulse" />,
    title: "Vuelve pronto",
    description:
      "Te esperamos. Pero recuerda: borra el historial. Solo por si acaso.",
  },
];

const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-slate-100 text-zinc-900 text-center px-4 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        ¿Cómo funciona esto?
      </h2>
      <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto">
        No es complicado: clic, placer, fuga.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Card circular */}
            <div className="bg-white w-72 h-72 rounded-full shadow-md flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-300 relative">
              {step.icon}
              <h3 className="text-lg font-bold mb-1">{step.title}</h3>
              <p className="text-sm text-zinc-600 px-4">{step.description}</p>
            </div>

            {/* Flecha (solo entre tarjetas, no después de la última) */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex justify-center items-center w-12 h-72">
                <FaArrowRight className="text-slate-400 text-4xl animate-bounce-horizontal" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-8">
        <button className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all">
          Empieza ahora
        </button>
      </div>
    
      <p className="text-xs text-slate-500 mt-8 italic text-center max-w-sm mx-auto">
        No juzgamos. Solo te damos espacio. No incluye toallitas húmedas.
      </p>


    </section>
  );
};

export default HowItWorksSection;
