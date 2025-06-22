// src/components/ContactSection.jsx
import React from "react";
import { FaEnvelopeOpenText, FaTools } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="py-24 bg-gradient-to-t from-slate-900 to-zinc-800 text-white px-4 text-center"
    >
      <div className="max-w-xl mx-auto">
        <FaTools className="text-5xl text-pink-500 mx-auto mb-4" />
        <h2 className="text-4xl font-extrabold mb-4">Sección de Contacto</h2>
        <p className="text-lg text-slate-300 mb-6">
          Esta sección está <span className="font-bold text-pink-400">fuera de servicio</span>.  
          Porque nuestro backend se fue de sabático.
        </p>

        <div className="bg-zinc-100 text-zinc-900 rounded-lg p-6 shadow-lg mb-6">
          <FaEnvelopeOpenText className="text-3xl text-zinc-600 mx-auto mb-2" />
          <p className="text-sm">
            Si tenés una pregunta, una crítica o simplemente necesitás enviar palabras a algún lugar,  
            podés escribirnos a:
          </p>
          <p className="mt-2 font-mono text-pink-600 select-all">
            contacto@a8cut.me
          </p>
        </div>

        <p className="text-sm text-slate-500 italic">
          Si no te respondemos, no es personal. Probablemente estamos... no sé, girando una ruleta.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
