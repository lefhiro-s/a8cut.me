import React from "react";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import {
  FaUserSecret,
  FaRegEye,
  FaServer,
  FaShieldAlt,
  FaCookieBite,
} from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import AdEmbed from "../components/AdEmbed";
const Privacy = () => {
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
            <FaUserSecret className="text-indigo-500 text-4xl mx-auto mb-2" />
            <h1 className="text-4xl font-extrabold mb-2">Política de Privacidad</h1>
            <p className="text-sm text-slate-500 italic">
              Última actualización: el mismo día en que decidimos no espiar a nadie.
            </p>
          </div>

          <div className="prose prose-zinc max-w-none text-justify text-base space-y-6">
            <h2>1. Introducción <FaRegEye className="inline-block text-blue-400 ml-2" /></h2>
            <p>
              Esta política de privacidad existe porque alguien en internet decidió que los disclaimers largos hacen que todo parezca más profesional.  
              Así que acá estamos. Disimulando legalidad.
            </p>

            <h2>2. ¿Qué datos recolectamos?</h2>
            <p>
              <strong>Ninguno.</strong>  
              No pedimos nombre, correo, ni signos zodiacales. No te rastreamos ni te perfilamos.  
              No porque seamos santos. Sino porque... no tenemos backend.
            </p>

            <h2>3. Cookies <FaCookieBite className="inline-block text-yellow-500 ml-2" /></h2>
            <p>
              ¿Cookies? Técnicamente no usamos. Pero si el framework que usamos (React + Vite + algo raro) mete alguna, no lo sabemos.  
              ¿Quién tiene tiempo para revisar eso?  
              Si ves cookies, pensá que son decorativas. O imaginarias.
            </p>

            <h2>4. Analítica y rastreo</h2>
            <p>
              No usamos Google Analytics. No usamos píxeles espías. No te seguimos como si fuéramos tu ex.  
              Si alguna vez implementamos algo, te vamos a avisar. Aunque, probablemente, no lo leas.
            </p>

            <h2>5. ¿Dónde se almacena tu información?</h2>
            <p>
              En ningún lado. Literalmente no hay información que guardar.  
              Si querés, podés escribirnos voluntariamente y contarnos cosas. Pero eso ya corre por tu cuenta.
            </p>

            <h2>6. Seguridad <FaShieldAlt className="inline-block text-emerald-500 ml-2" /></h2>
            <p>
              Aunque no manejamos datos, queremos que sepas que esta página fue codificada con amor, buenas prácticas y tres tazas de café.  
              Eso es lo más cerca que vamos a estar de una "infraestructura segura".
            </p>

            <h2>7. Servicios de terceros <FaServer className="inline-block text-slate-400 ml-2" /></h2>
            <p>
              Si en algún momento incrustamos algo externo (como YouTube o memes de gatos), esas plataformas pueden tener sus propios mecanismos de rastreo.  
              <u>No podemos controlar eso, y honestamente, tampoco entendemos bien cómo funciona.</u>
            </p>

            <h2>8. Derechos del usuario</h2>
            <p>
              Como usuario, tenés derecho a... bueno, a cerrar esta pestaña en cualquier momento.  
              También podés leer esta política en voz alta para sentirte más importante.
            </p>

            <h2>9. Cambios a esta política</h2>
            <p>
              Esta política puede cambiar cuando nos pinten las ganas o cuando descubramos que accidentalmente recolectamos el alma de alguien.  
              Si algo importante cambia, probablemente no te enteres. A menos que estés obsesionado con nuestra página legal.
            </p>

            <h2>10. Conclusión</h2>
            <p>
              No te estamos espiando. No sabemos quién sos. Y si supiéramos, igual no te juzgaríamos.  
              Esto es un espacio libre de juicios... y de bases de datos.
            </p>

            <blockquote className="text-center italic border-l-4 border-indigo-500 pl-4 text-zinc-600">
              “Privacidad no es esconderse. Es que nadie te esté mirando para empezar.”  
              <span className="text-sm block mt-1">— Un servidor que nunca se encendió</span>
            </blockquote>
          </div>
          {nsfw === "true" && <AdEmbed type="simpleScript2Exoclick" />}
          {nsfw === "true" && <AdEmbed type="simpleScriptExoclick" />}
        </div>


      </section>

      <FooterSection />
    </>
  );
};

export default Privacy;
