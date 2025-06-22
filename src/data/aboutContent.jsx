// src/data/aboutContent.js

import {
  FaRobot,
  FaUserNinja,
  FaHeartBroken,
  FaShieldAlt,
  FaBlind,
  FaHandSparkles,
} from "react-icons/fa";

export const about = {
  title: "¿Quiénes somos?",
  intro: {
    heading: "¿Quiénes somos?",
    text: "No somos una empresa. No somos una comunidad. Somos algo peor: una idea con conexión a internet.",
  },
  personas: [
    {
      icon: <FaRobot className="w-10 h-10 text-pink-400 mb-2" />,
      title: "Algoritmo Malcriado",
      text: "Genera contenido que no pediste, pero vas a consumir igual. Sin contexto. Sin juicio.",
    },
    {
      icon: <FaUserNinja className="w-10 h-10 text-blue-400 mb-2" />,
      title: "Persona Anónima",
      text: "Alguien con suficiente habilidad para programar, pero no para dejar de hacerlo a las 3am.",
    },
    {
      icon: <FaHeartBroken className="w-10 h-10 text-rose-400 mb-2" />,
      title: "Idealismo Derrotado",
      text: "Una filosofía vaga detrás del proyecto. Algo sobre arte, libertad y no usar backend.",
    },
  ],
  filosofia: [
    {
      icon: <FaShieldAlt className="text-4xl text-emerald-400" />,
      title: "Nuestra Misión",
      text: `Crear experiencias visuales que no enseñan nada,  
      pero no podés dejar de mirar.  
      Clic, deseo, repetición.`,
    },
    {
      icon: <FaBlind className="text-4xl text-indigo-400" />,
      title: "Nuestra Visión",
      text: `El mundo está lleno de sitios inútiles.  
      Nosotros somos el primero que lo admite con orgullo.  
      No somos necesarios. Somos irresistibles.`,
    },
    {
      icon: <FaHandSparkles className="text-4xl text-yellow-400" />,
      title: "Nuestros Valores",
      text: `Diseño sobre función.  
      Humor sobre corrección.  
      Erotismo sobre todo lo demás.`,
    },
  ],
  epilogo:
    "Si esto en algún momento llega a generar unas monedas para el almuerzo, tampoco nos vamos a quejar. Especialmente si hay bebida incluida.",
};
