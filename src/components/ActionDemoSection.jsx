// src/components/ActionDemoSection.jsx
import React from "react";
import SmartWheel from "./WheelOfMisfortune";
import VisualNovelViewer from "./VisualNovelViewer";

const ActionDemoSection = () => {
  return (
    <section
      id="demo"
      className="relative py-24 bg-gradient-to-t from-slate-900 to-zinc-800 text-white px-4 overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[url('/sprites/bg-pattern.png')] bg-repeat opacity-5 z-0 pointer-events-none" />

      {/* Sprites decorativos flotantes */}
      <div className="absolute top-10 left-10 animate-pulse text-4xl opacity-10 select-none">✨</div>
      <div className="absolute bottom-20 right-16 animate-bounce text-2xl opacity-10 select-none">🌀</div>
      <div className="absolute top-1/2 left-5 animate-spin-slow text-3xl opacity-5 select-none">📺</div>
      <div className="absolute bottom-5 right-1/3 animate-float text-2xl opacity-10 select-none">🎮</div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          ¿Quieres probar tú mismo?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Te dejamos una muestra gratuita de la inutilidad que ofrecemos. Una ruleta y una historia.
        </p>

        <div className="grid gap-12 items-start">
          {/* Ruleta 
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-pink-400 text-center">
              Ruleta del caos
            </h3>
            <div className="flex justify-center text-center">
              <SmartWheel />
            </div>
          </div>
           */}

          {/* Visual Novel */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
              Novela visual express
            </h3>
            <VisualNovelViewer />
          </div>
        </div>

        {/* Disclaimer final cinismo-powered */}
        <p className="text-sm text-slate-500 mt-12 italic text-center">
          Este demo no recolecta datos. Solo miradas perdidas y decisiones de las que quizás te arrepientas.
        </p>
        <p className="text-xs text-slate-500 mt-4 italic text-center max-w-xl mx-auto">
          No nos hacemos responsables si perdés tu tiempo esperando algo más. Pero te entendemos. Nosotros también esperamos cosas que nunca llegan.
        </p>
        <p className="text-xs text-slate-600 mt-2 italic text-center">
          Este módulo puede inducir sensaciones como decepción, ternura digital o ganas de reiniciar el router.
        </p>
      </div>
    </section>
  );
};

export default ActionDemoSection;
