import React from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import {
  FaCookieBite,
  FaUtensils,
  FaRegGrinStars,
  FaSadTear,
  FaBookOpen,
} from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AdEmbed from "../components/AdEmbed";
const Cookies = () => {
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
      <section className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 text-zinc-900 py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <FaCookieBite className="text-yellow-500 text-4xl mx-auto mb-2" />
            <h1 className="text-4xl font-extrabold mb-2">Política de Cookies</h1>
            <p className="text-sm text-slate-500 italic">
              Última actualización: justo antes de que nos diera hambre.
            </p>
          </div>

          <div className="prose prose-zinc max-w-none text-justify text-base space-y-6">

            <h2>1. ¿Usamos cookies digitales?</h2>
            <p>
              No. No usamos cookies, ni rastreadores, ni scripts ocultos que te sigan como tu crush viendo tus historias.  
              Este sitio es libre de gluten, rastreo y sentido común.
            </p>
            <p>
              Técnicamente podrían existir cookies si algún plugin se descontrola, pero no están ahí por voluntad nuestra. <strong>No almacenamos nada. Ni siquiera tus malas decisiones.</strong>
            </p>

            <h2>2. ¿Qué pasa si estás comiendo galletas mientras navegás?</h2>
            <p>
              Bueno... en ese caso:
              <FaSadTear className="inline-block text-blue-400 ml-2" /> <strong className="text-pink-500">Nos da envidia.</strong>
            </p>
            <p>
              Si estás comiendo galletas reales frente al monitor, te pedimos que no las muerdas tan fuerte.  
              Nos distrae. No podemos verlas, pero sentimos la traición.
            </p>

            <h2>3. Política frente al consumo injustificado de galletas</h2>
            <p>
              a8cut.me se reserva el derecho de sentir hambre automáticamente si detectamos (imaginariamente) que tenés snacks cerca.  
              También podemos juzgarte si son de avena con pasas.
            </p>

            <h2>4. Galletas recomendadas para este sitio <FaRegGrinStars className="inline-block text-yellow-500 ml-2" /></h2>
            <ul className="list-disc pl-6">
              <li>Cookies con chispas de chocolate (por razones obvias)</li>
              <li>Galletitas de limón con forma de emoji</li>
              <li>Galletas famosísimas con chocolate y crema blanca en el medio que no vamos a nombrar por razones legales</li>
              <li>Galletas saladas si te sentís irónico</li>
            </ul>

            <h2>5. Receta de cookies caseras con chispas <FaUtensils className="inline-block text-orange-400 ml-2" /></h2>
            <p>
              Ya que estamos, no te vas sin esto. Si no usamos cookies técnicas, al menos te llevás cookies reales:
            </p>
            <p>
              <strong>Ingredientes:</strong>
              <ul className="list-disc pl-6">
                <li>1 taza de manteca (con culpa)</li>
                <li>1 taza de azúcar</li>
                <li>2 tazas de harina (la que tengas)</li>
                <li>1 huevo (si tenés gallina, mejor)</li>
                <li>1 taza de chispas de chocolate</li>
                <li>1 cucharadita de esencia de desesperación (opcional)</li>
              </ul>
            </p>
            <p>
              <strong>Instrucciones:</strong>
              <ol className="list-decimal pl-6">
                <li>Precalentá el horno a 180°C (o 350°F si te gusta complicarte).</li>
                <li>Mezclá todo en un bowl hasta que parezca comestible.</li>
                <li>Formá bolitas, ponelas en una bandeja y horneá 10-12 minutos.</li>
                <li>Esperá que se enfríen (o no, arriesgalo todo).</li>
              </ol>
            </p>

            <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-zinc-600">
              “Esta es la única política de cookies que probablemente vayas a leer completa.”  
              <span className="text-sm block mt-1">— Internet, sorprendido</span>
            </blockquote>

            <h2>6. Conclusión</h2>
            <p>
              No hay cookies técnicas. Pero sí hambre emocional.  
              Y ahora probablemente tengas antojo.  
              Si horneás algo después de esto, etiquetanos en... bueno, en ningún lado. No usamos redes sociales.
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

export default Cookies;
