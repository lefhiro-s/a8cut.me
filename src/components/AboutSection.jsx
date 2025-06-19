import React from "react";
import { about } from "../data/aboutContent";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-zinc-900 to-slate-900 text-white px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">{about.title}</h2>
        <p className="text-lg text-slate-300 mb-12">{about.intro.text}</p>

        {/* Mini-equipo ridículo */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16">
          {about.personas.map((persona, index) => (
            <div key={index} className="flex flex-col items-center">
              {persona.icon}
              <h3 className="text-xl font-bold mb-1">{persona.title}</h3>
              <p className="text-sm text-slate-400">{persona.text}</p>
            </div>
          ))}
        </div>

        {/* Filosofía */}
        <div className="space-y-8">
          {about.filosofia.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-xl shadow-lg flex items-center gap-6"
            >
              <div>{item.icon}</div>
              <div className="text-left">
                <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-slate-300">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-sm text-slate-500 italic text-center">
          <strong>PD:</strong> {about.epilogo}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
