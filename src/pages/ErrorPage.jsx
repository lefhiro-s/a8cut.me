import React, { useState } from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import { FaBug, FaMapSigns, FaUserNinja, FaQuestion } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AdEmbed from "../components/AdEmbed";
const reasons = [
  { value: "lost", label: "Me perdí" },
  { value: "accident", label: "Toqué algo sin querer" },
  { value: "onPurpose", label: "Vine a propósito" },
  { value: "supernatural", label: "Estoy aquí por una fuerza desconocida" },
];

const responses = {
  lost: "Comprensible. El 83% de los visitantes también se perdió.",
  accident: "Clásico. Suele pasar cuando uno navega con un dedo rebelde.",
  onPurpose: "¿Estás bien? No deberías venir acá por decisión propia.",
  supernatural: "Eso explica bastante. Mandá saludos a los fantasmas.",
};

const ErrorPage = () => {
  const [selected, setSelected] = useState("");
  const [validated, setValidated] = useState(false);
  const [searchParams] = useSearchParams();
  const nsfw = searchParams.get("nsfw");
  const invader = searchParams.get("invader");
  return (
    <>
      <HeaderSection />
      {nsfw === "true" && <AdEmbed type="PopunderExoclick" />}

      {invader === "true" && (
        <>

          <AdEmbed type="directLink" />
        </>
      )}
      <section className="min-h-screen bg-gradient-to-b from-zinc-900 to-slate-800 text-white py-24 px-4">
        <div className="max-w-xl mx-auto bg-zinc-800 border border-zinc-700 rounded-xl shadow-lg p-8">
          <div className="text-center mb-6">
            <FaBug className="text-pink-500 text-5xl mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Error 404-ish</h1>
            <p className="text-slate-400 italic">
              Llegaste a un lugar que no existe. Pero ya que estás, elegí una excusa.
            </p>
          </div>

          <form className="space-y-4">
            {reasons.map((reason) => (
              <label
                key={reason.value}
                className="flex items-center gap-3 bg-zinc-700 hover:bg-zinc-600 p-3 rounded-md cursor-pointer transition"
              >
                <input
                  type="radio"
                  name="reason"
                  value={reason.value}
                  checked={selected === reason.value}
                  onChange={() => {
                    setSelected(reason.value);
                    setValidated(false);
                  }}
                  className="accent-pink-500"
                />
                <span>{reason.label}</span>
              </label>
            ))}
          </form>

          <button
            onClick={() => setValidated(true)}
            className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full transition"
          >
            Evaluar Excusa
          </button>

          {validated && (
            <div className="mt-6 bg-zinc-700 p-4 rounded text-center">
              <p className="text-sm italic text-slate-300">
                {responses[selected] || "No seleccionaste nada, pero igual te perdonamos."}
              </p>
            </div>
          )}

          <div className="mt-8 text-center text-slate-500 text-sm">
            <p>
              Si llegaste acá por error, podés <a href="/" className="underline">volver a casa</a>.  
              Si llegaste por decisión propia… bueno, eso es más grave.
            </p>
          </div>
          {nsfw === "true" && <AdEmbed type="simpleScript2Exoclick" />}
          {nsfw === "true" && <AdEmbed type="simpleScriptExoclick" />}
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default ErrorPage;
