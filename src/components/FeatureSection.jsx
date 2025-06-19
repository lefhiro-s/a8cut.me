// src/components/FeaturesSection.jsx
import React from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";
import { useElementInView } from "../hooks/useElementInView";
import { FaDice, FaBookOpen, FaQuestionCircle, FaPenFancy, FaUserSecret, FaRandom } from "react-icons/fa";
import SpriteObserver from "./SpriteObserver";

const features = [
  {
    title: "Novelas Visuales Enriquecidas",
    subtitle: "Historias que se sienten, no solo se leen",
    description:
      "Sumérgete en relatos visuales donde el texto, las imágenes y los efectos se combinan para crear una experiencia más intensa. Cada capítulo está diseñado para atraparte y dejarte con ganas de pasar la página… o quedarte un rato más.",
    icon: "📖",
  },
  {
    title: "Modo Soft & Hard",
    subtitle: "Elige tu forma de disfrutar",
    description:
      "¿Prefieres algo sutil o sin filtros? En modo Soft verás versiones suaves, sugerentes. En modo Hard, todo se vuelve explícito. Cambia en cualquier momento, según lo que busques ahora.",
    icon: "🌓",
  },
  {
    title: "Galerías Pecaminosas",
    subtitle: "Imágenes que dicen más de lo que deberían",
    description:
      "Descubre colecciones visuales llenas de deseo. Escenas intensas y provocadoras que despiertan curiosidad y placer. Algunas deberías verlas en privado… o tal vez no.",
    icon: "🖼️",
  },

  {
    title: "Interacciones y Conexiones",
    subtitle: "Aquí no das me gusta. Aquí dejas huella.",
    description:
      "Reacciona con algo más que un clic. Marca lo que te enciende, azota lo que te impacta, susurra lo que no puedes decir en voz alta. Porque aquí no solo ves… participas. Y a veces, lo que haces deja más huella que lo que miras.",
    icon: "💦",
  },
    {
    title: "Red Room",
    subtitle: "Contenido para los más curiosos",
    description:
      "Un espacio exclusivo con escenas explícitas, estadísticas privadas y experiencias diseñadas para ir más allá. Aquí se desbloquea lo que otros ocultan. Accede si estás listo para explorar más.",
    icon: "⚪",
    primary: true,
  },
  {
    title: "Exploración Aleatoria",
    subtitle: "Descubre algo inesperado",
    description:
      "No siempre sabes lo que quieres ver. Con un solo clic, accede a contenido elegido al azar: novelas, escenas o imágenes que tal vez no buscabas… pero terminarás disfrutando.",
    icon: "🔀",
  },
];


const FeaturesSection = () => {
  useScrollDirection();
  const [titleRef, titleVisible] = useElementInView();
  const [cardsRef, cardsVisible] = useElementInView();

  return (
    <section
      id="features"
      className="relative py-20 bg-gradient-to-b from-slate-50 to-slate-200 text-zinc-900 overflow-hidden"
    >
      <h2
        ref={titleRef}
        className={`text-4xl md:text-5xl font-extrabold text-center mb-4 transition-all duration-500 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        ¿Qué puedes hacer aquí?
      </h2>
      <span
        className={`block text-xl text-slate-600 text-center mb-12 transition-all duration-500 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Spoiler: más de lo que deberías.
        </span>

      <div
        ref={cardsRef}
        className={`relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 transition-all duration-700 ${
          cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative bg-${feature.primary ? 'primary' : 'white'} p-6 rounded-xl shadow-md hover:scale-[1.02] hover:rotate-[0.5deg] transition-all duration-300 z-10`}
          >
            <h1 className="text-3xl font-bold mb-1" >{feature.icon}</h1>
            <h3 className={`text-xl font-bold mb-1 ${feature.primary ? 'text-zinc-200': ''}`}>{feature.title}</h3>
            <p className={`text-sm  italic mb-2 ${feature.primary ? 'text-red-200': 'text-slate-500'}`}>{feature.subtitle}</p>
            <p className={`text-sm " ${feature.primary ? 'text-zinc-100' : 'text-zinc-600'}`}>{feature.description}</p>
          </div>
        ))}
      </div>

      <SpriteObserver
        src="sprites/feature-section-eye.png"
        type="slideTop"
        offset={150}
        position="top: 10%; left: 8%;"
        className="w-16 md:w-48 z-0"
        comicOverlay={true} // Aplicar marco de cómic
      />
      <SpriteObserver
        src="sprites/feature-section-roulette.png"
        type="fadeRotate"
        offset={200}
        position="top: 20%; right: 5%;"
        className="w-16 md:w-64 z-0"
        comicOverlay={true} // Aplicar marco de cómic

      />
      <SpriteObserver
        src="sprites/feature-section-tv.png"
        type="slideLeft"
        offset={300}
        position="top: 60%; left: 5%;"
        className="w-16 md:w-64 z-0"
      />
      <SpriteObserver
        src="sprites/feature-section-robot.png"
        type="slideRight"
        offset={300}
        position="top: 65%; right: 2%;"
        className="w-16 md:w-64 z-0"
      />
    </section>
  );
};

export default FeaturesSection;
