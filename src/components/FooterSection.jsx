// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaSkullCrossbones, FaCopyright } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-zinc-900 text-slate-300 py-12 px-4 text-center border-t border-zinc-800">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="relative z-10 flex flex-col items-center">
          <img src="/img/logo-1.png" alt="Logo A8cutme" className="w-32 h-auto " />
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/terms" className="hover:underline">
            Términos que nadie leyó
          </Link>
          <Link to="/privacy" className="hover:underline">
            Política de privacidad imaginaria
          </Link>
          <Link to="/cookies" className="hover:underline">
            Política de cookies (sí, usamos o no, quién sabe)
          </Link>
        </nav>

        <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
          <FaCopyright className="inline-block" />
          2025 a8cut.me — Todos los derechos reservados.  
          Danos alguna excusa para demandar. Necesitamos el dinero.
        </p>


        <p className="text-sm text-slate-600 italic mt-4">
          <FaSkullCrossbones className="inline-block mr-1" />
          Este sitio no cambia vidas. Pero distrae mientras decidís qué almorzar.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
