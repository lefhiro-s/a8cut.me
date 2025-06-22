import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCookieBite, FaUserShield, FaScroll } from "react-icons/fa";

const HeaderSection = () => {
  return (
    <header className="bg-zinc-900 text-white shadow-md fixed w-full top-0 left-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Nombre */}
        <Link to="/" className="text-pink-500 text-2xl font-extrabold tracking-tight">
          a8cut.me
        </Link>

        {/* Navegación */}
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-pink-400 transition">
              <FaHome />
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/terms" className="flex items-center gap-1 hover:text-pink-400 transition">
              <FaScroll />
              Términos
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="flex items-center gap-1 hover:text-pink-400 transition">
              <FaUserShield />
              Privacidad
            </Link>
          </li>
          <li>
            <Link to="/cookies" className="flex items-center gap-1 hover:text-pink-400 transition">
              <FaCookieBite />
              Cookies
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
