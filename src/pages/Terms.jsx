import React from "react";
import HeaderSection from "../components/HeaderSection";
import { FaGavel, FaEye, FaUserSecret, FaExclamationTriangle, FaLaughSquint } from "react-icons/fa";
import FooterSection from "../components/FooterSection";
import { useSearchParams } from "react-router-dom";
import AdEmbed from "../components/AdEmbed";
const Terminos = () => {
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
            <FaGavel className="text-pink-500 text-4xl mx-auto mb-2" />
            <h1 className="text-4xl font-extrabold mb-2">Términos y Condiciones</h1>
            <p className="text-sm text-slate-500 italic">
              Última actualización: hace 30 días. Sin recibir una visita desde entonces.
            </p>
          </div>

          <div className="prose prose-zinc max-w-none text-justify text-base space-y-6">
            <h2>1. Aceptación <FaEye className="inline-block text-blue-400 ml-2" /></h2>
            <p>
              Al acceder a este sitio, aceptás estos términos. Si no estás de acuerdo, podés cerrar esta pestaña, aunque sabemos que no lo vas a hacer.  
              <strong>Continuar navegando implica que aceptás cosas que probablemente no leíste.</strong>
            </p>

            <h2>2. Uso del sitio <FaExclamationTriangle className="inline-block text-yellow-500 ml-2" /></h2>
            <ul className="list-disc pl-6">
              <li>Podés hacer clic donde quieras, pero no garantizamos que pase algo.</li>
              <li>El contenido es generado con algoritmos y ansiedad creativa.</li>
              <li>No hay soporte técnico. Hay suerte.</li>
            </ul>

            <h2>3. Propiedad Intelectual <span className="inline-block text-amber-500 ml-2">💍</span></h2>
            <p>
            Todo lo que ves en este sitio es de nuestra autoría, locura o casualidad creativa.  
            Y sí, es <strong>nuestra propiedad intelectual</strong>, aunque a veces ni nosotros sepamos cómo funciona eso.
            </p>
            <p>
            Pero por las dudas: <u>no robes nada</u>. Ni una línea. Ni un ícono. Ni una idea.
            </p>
            <p className="italic text-pink-500 font-semibold">
            Porque es nuestro. Todo nuestro. Nuestro tesoro. <br />
            <span className="text-lg">Mi precioso 💍</span>
            </p>
            <p>
            Si alguien se atreve a copiar, plagiar o "inspirarse demasiado",  
            estamos moralmente autorizados a enviarles memes pasivo-agresivos,  
            o en casos extremos, a iniciar una demanda legal con fines recaudatorios.
            </p>
            <p>
            Este es nuestro arte. Nuestra tontería. Nuestro código mal escrito.  
            Y como cualquier artista inseguro: lo defenderemos con uñas, dientes y argumentos legales muy flojos.
            </p>

            <h2>4. Privacidad <FaUserSecret className="inline-block text-indigo-500 ml-2" /></h2>
            <p>
              No recolectamos tus datos porque no sabemos cómo.  
              <mark>Pero si lo supiéramos, igual no lo haríamos.</mark>
            </p>

            <h2>5. Jurisdicción aleatoria</h2>
            <p>
              En caso de disputa legal, giraremos una ruleta para elegir en qué país vamos a ignorarte.
            </p>

            <h2>6. Cosas importantes (en serio)</h2>
            <p>
              Esta sección es clave.  
              <u>Presta atención:</u> No navegues mientras conducís. No hagas clic sin pensar.  
              No confíes en un sitio que se burla de su propia existencia.
            </p>

            <h2>7. ¿Alguien está leyendo esto?</h2>
            <p>
              Si llegaste hasta acá, sacá un screenshot y mándalo a <span className="underline text-pink-600">contacto@a8cut.me</span>.  
              No vas a ganar nada, pero necesitábamos saber si esto tiene sentido.
            </p>

            <blockquote className="text-center italic border-l-4 border-pink-500 pl-4 text-zinc-600">
              “Aceptar términos sin leerlos es un acto de fe. O pereza. O ambas.”  
              <span className="text-sm block mt-1">— Alguien con más tiempo que vos</span>
            </blockquote>

            <h2>8. Cierre emocional <FaLaughSquint className="inline-block text-amber-500 ml-2" /></h2>
            <p>
              Gracias por confiar en nosotros. O por no darte cuenta que lo hiciste.  
              Igual te queremos. Legalmente hablando.
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

export default Terminos;
