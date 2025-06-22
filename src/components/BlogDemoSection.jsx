// src/components/BlogDemoSection.jsx
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogDemoSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-b from-slate-900 to-zinc-800 text-white px-4 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          ¿Leés también?
        </h2>
        <p className="text-lg text-slate-300 text-center mb-12">
          Increíble. Acá tenés una entrada que no te va a cambiar la vida. Pero tiene márgenes y estructura.
        </p>

        {/* Artículo con estilo de blog */}
        <article className="bg-zinc-100 text-zinc-900 rounded-xl shadow-xl p-8 prose prose-zinc prose-headings:text-zinc-800 prose-p:text-zinc-700 prose-strong:text-zinc-900 prose-a:text-pink-600 max-w-none mx-auto">
          <h3>El impacto interdimensional del botón <u>“Siguiente”</u></h3>

          <p>
            En la vastedad de las interfaces digitales, pocas entidades han alcanzado la ubicuidad silenciosa del botón “Siguiente”.
            Ignorado, clickeado sin pensar, y absolutamente indispensable, este pequeño rectángulo de promesas ha definido generaciones de decisiones vacías.
          </p>

          <h4>1. Origen y mitología del ‘Siguiente’</h4>
          <p>
            Algunos sostienen que el botón “Siguiente” nació con los formularios de inscripción a boletines que nadie lee.
            Otros creen que fue una forma elegante de decir “Esto no es todo, pero tampoco es mejor”.
          </p>
          <ul>
            <li><strong>Primera aparición registrada:</strong> pantallas de instalación de software en 1998.</li>
            <li><strong>Utilización promedio:</strong> 87% de las veces sin leer lo anterior.</li>
            <li><strong>Consecuencia habitual:</strong> instalar cosas innecesarias o aceptar términos legales que podrían vender tu alma.</li>
          </ul>

          <h4>2. Dimensiones filosóficas del clic</h4>
          <p>
            Presionar “Siguiente” es un acto profundamente humano. Requiere fe ciega y una desconexión emocional absoluta.
            Implica que lo que viene es importante, pero no lo suficientemente importante como para justificar contexto.
          </p>
          <blockquote>
            “Todo clic es un salto al vacío con la ilusión de control.”  
            <br />
            <span className="text-sm text-slate-500">– Probablemente Kierkegaard, pero digital</span>
          </blockquote>

          <h4>3. Tipología de usuarios del ‘Siguiente’</h4>
          <ol>
            <li><strong>El velocista:</strong> clickea sin mirar. No recuerda en qué parte del universo digital se encuentra.</li>
            <li><strong>El escéptico:</strong> lee el contenido, luego clickea. Igualmente pierde tiempo.</li>
            <li><strong>El doble clickeador:</strong> no confía en que lo hizo bien. Spoiler: nunca lo hizo bien.</li>
          </ol>

          <h4>4. Aplicaciones modernas e irrelevantes</h4>
          <p>
            Hoy, el botón “Siguiente” se encuentra en todos lados: desde tests de personalidad que te comparan con frutas, hasta tutoriales que no necesitás.
            Incluso hay quienes afirman haberlo visto en sueños, justo antes de despertar sin respuestas.
          </p>

          <ul>
            <li><mark>Suscripción accidental</mark> a 3 newsletters con contenido idéntico.</li>
            <li><u>Aceptación involuntaria</u> de términos en lenguaje jurídico antiguo.</li>
            <li><strong>Crisis existencial</strong> al llegar a un “Siguiente” que no lleva a nada.</li>
          </ul>

          <h4>5. Conclusión que no lo es</h4>
          <p>
            Hacer clic en “Siguiente” es una metáfora involuntaria del paso del tiempo.  
            Es avanzar porque sí. Porque está ahí. Porque detenerse implica pensar, y pensar... duele.
          </p>

          <p>
            Así que hacelo. Clickeá. Pasá de sección.  
            No vas a aprender nada, pero vas a sentir que hiciste algo. Y eso, en este sitio, es más que suficiente.
          </p>

          <p className="text-center mt-6">
            <em>“Siguiente” es más que una palabra. Es una excusa elegante para seguir sin motivo.</em>
          </p>

          {/* Botón */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-pink-600 text-white px-5 py-2 rounded-full hover:bg-pink-700 transition"
            >
              Siguiente
              <FaArrowRight />
            </button>
          </div>
        </article>

        <p className="mt-12 text-sm text-slate-400 italic text-center max-w-md mx-auto">
          Este contenido no tiene scroll infinito. Porque tampoco tiene sentido.
        </p>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white text-zinc-800 p-6 rounded-xl shadow-xl max-w-sm text-center">
              <h3 className="text-lg font-bold mb-2">Nada para mostrar</h3>
              <p className="text-sm text-slate-600 mb-4">
                Pensaste que había más. Pero esto era todo.  
                El botón “Siguiente” fue solo una performance emocional.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition"
              >
                Aceptar la nada
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDemoSection;
