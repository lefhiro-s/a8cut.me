// src/components/StatsTestimonialsSection.jsx
import React, { useEffect, useState } from "react";
import { FaUsers, FaBrain, FaClock, FaStar } from "react-icons/fa";
import AdEmbed from "./AdEmbed"; // Asegúrate de que la ruta sea correcta
import { useSearchParams } from "react-router-dom";

const statsData = [
  { label: "Usuarios confundidos", target: 87541, icon: <FaUsers className="text-pink-500 w-8 h-8 mb-2" /> },
  { label: "Neuronas desperdiciadas", target: 999999, icon: <FaBrain className="text-blue-400 w-8 h-8 mb-2" /> },
  { label: "Minutos perdidos", target: 123456789, icon: <FaClock className="text-yellow-400 w-8 h-8 mb-2" /> },
];

const testimonials = [
  {
    name: "Mi Mamá",
    quote: "El mejor sitio que vi en mi vida. No entendí nada, pero me encantó.",
    rating: "⭐⭐⭐⭐⭐ (infinito amor de madre)",
  },
  {
    name: "Armando, el del trabajo",
    quote: "Entré por curiosidad. Me fui con dudas existenciales. 10/10.",
    rating: "⭐⭐⭐⭐⭐ (nivel jefe final)",
  },
  {
    name: "Anónimx con Wi-Fi",
    quote: "Pensé que era un virus. Me quedé 40 minutos.",
    rating: "⭐⭐⭐⭐ (sorprendentemente atrapante)",
  },
  {
    name: "El algoritmo de TikTok",
    quote: "No sé cómo llegué acá, pero estoy satisfecho.",
    rating: "⭐x1000 (recomendado sin contexto)",
  },
  {
    name: "GPT-3.5 en modo vacaciones",
    quote: "Es como yo, pero con menos sentido y más colores.",
    rating: "⭐♾ (irrelevante pero irresistible)",
  },
  {
    name: "Tu conciencia a las 3am",
    quote: "No era lo que buscabas. Pero ahora es lo único que importa.",
    rating: "⭐⭐⭐⭐⭐ (certificado por insomnio)",
  },
];

// Hook para animar los números
const useCountUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16)); // ~60fps
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);

  return count.toLocaleString();
};

const StatsTestimonialsSection = () => {
  const [searchParams] = useSearchParams();
  const nsfw = searchParams.get("nsfw");
  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-b from-slate-200 to-slate-100 text-zinc-900 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Cifras y Gente Real (creemos)
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          Porque no basta con decirlo... hay que inventar pruebas.
        </p>

        {/* Stats con conteo animado */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {statsData.map((stat, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const animatedNumber = useCountUp(stat.target);
            return (
              <div key={i} className="flex flex-col items-center">
                {stat.icon}
                <h3 className="text-3xl font-bold tabular-nums">{animatedNumber}</h3>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonios con estrellas exageradas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white text-zinc-800 p-6 rounded-xl shadow-md text-left flex flex-col justify-between"
            >
              <p className="italic text-sm mb-4">“{t.quote}”</p>
              <p className="text-pink-500 text-xs mb-2">{t.rating}</p>
              <p className="font-semibold text-right text-pink-600">– {t.name}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-slate-400 italic">
          Todos los números son aproximados, y los testimonios no fueron aprobados por nadie. Literalmente nadie.
        </p>
        {nsfw === "true" && <AdEmbed type="Banner2Exoclick" />}

      </div>

    </section>
  );
};

export default StatsTestimonialsSection;