// src/components/FaqSection.jsx
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import AdEmbed from "./AdEmbed";
import { useSearchParams } from "react-router-dom";

const faqItems = [
  {
    type: "highlight",
    question: "¿Por qué a8cut.me?",
    answer: 
        `a8cut.me nació como una anomalía. Es un intento de encapsular la experiencia digital moderna: algo rápido, confuso, cargado de promesas y vacío de propósito.  
          La “a” es de algo, el “8” es el ciclo infinito de decisiones irrelevantes, “cut” representa el corte limpio con la lógica, y “.me”… bueno, eso claramente es personal.  
      
          Esperá... ¿esto tiene sentido? ¿Quién escribió esto?  
          No. No, realmente no. a8cut.me no significa nada. Y está perfecto así.
      
          <br /><br />
          <span class="text-sm text-pink-200 italic">
            También porque el dominio estaba libre. No vamos a mentirte.
          </span>
        `,
  },
  {
    type: "faq",
    question: "¿Necesito crear una cuenta?",
    answer:
      "No. Ni queremos tu correo, ni tu contraseña. Bastante tenés con recordarte el PIN del cajero.",
  },
  {
    type: "faq",
    question: "¿Esto es un juego? ¿Una app? ¿Un chiste?",
    answer:
      "Es una experiencia. Como cuando abrís la heladera 6 veces esperando que aparezca algo nuevo. Pero con botones.",
  },
  {
    type: "faq",
    question: "¿Qué tan aleatorio es todo esto?",
    answer:
      "Lo suficiente como para que no puedas predecirlo, pero no tanto como para que parezca magia. Es caos controlado, como una tostadora con sentimientos.",
  },
  {
    type: "faq",
    question: "¿Puedo confiar en ustedes?",
    answer:
      "Si estás leyendo esto, ya lo hiciste. Ups.",
  },
  {
    type: "faq",
    question: "¿Dónde están las condiciones de uso?",
    answer:
      "Debajo del botón que dice 'acepto sin leer'. Que tampoco está, pero imaginátelo.",
  },
  {
    type: "no-faq",
    question: "¿Este sitio tiene propósito?",
    answer:
      "Tiene intenciones. Lo del propósito es un poco fuerte para un dominio con “.me”.",
  },
  {
    type: "no-faq",
    question: "¿Tiene alma este proyecto?",
    answer:
      "Técnicamente no. Pero si la tuviera, estaría en constante crisis existencial y programada en JavaScript.",
  },
  {
    type: "no-faq",
    question: "¿Esto es arte?",
    answer:
      "Realmente alguien se atrevería a llamarlo arte? Es más como un collage de ideas que no sabían que eran ideas.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);
  const [searchParams] = useSearchParams();

  const nsfw = searchParams.get("nsfw");
  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 text-zinc-800 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          Preguntas Frecuentemente Ignoradas
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12">
          Sabemos que nadie lee esto. Por eso escribimos lo que queríamos decir igual.
        </p>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            let bg = "bg-white";
            let text = "text-zinc-800";
            let openText = "text-slate-600";
            let hover = "hover:bg-slate-100";
            let border = "border-transparent";

            if (item.type === "highlight") {
              bg = "bg-pink-600";
              text = "text-white";
              openText = "text-slate-100";

              hover = "hover:bg-pink-700";
            }

            if (item.type === "no-faq") {
              bg = "bg-slate-800";
              text = "text-white";
              openText = "text-slate-300";
              hover = "hover:bg-slate-700";
              border = "border border-slate-700";
            }

            return (
              <div
                key={index}
                className={`rounded-xl shadow-md overflow-hidden transition-all duration-300 ${bg} ${border}`}
              >
                <button
                  onClick={() => toggle(index)}
                  className={`w-full flex justify-between items-center text-left px-6 py-4 font-semibold ${text} ${hover} transition`}
                >
                  {item.question}
                  <FaChevronDown
                    className={`ml-2 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div
                    className={`px-6 pb-4 text-sm ${openText}`}
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="text-sm text-slate-400 italic text-center mt-16 max-w-md mx-auto">
          Si tu duda no aparece acá, probablemente nadie más la tuvo.  
          Y eso también es un dato. O una alerta.
        </p>
      {nsfw === "true" && <AdEmbed type="BannerExoclick" />}

      </div>
    </section>
  );
};

export default FaqSection;
