import React from "react";
import Masonry from "react-masonry-css";
import { galleryImages } from "../data/galleryImages";

const shuffleArray = (array) =>
  [...array].sort(() => 0.5 - Math.random());

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const fillerQuotes = [
  "¿Hasta dónde llegás por curiosidad?",
  "Deslizar es placer pasivo. No te detengas.",
  "Si esto no te hizo nada… miralo otra vez.",
  "Esto no es un final. Es un recordatorio.",
];

const GalleryMasonrySection = () => {
  const images = shuffleArray(galleryImages).slice(0, 24);

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-slate-900 to-zinc-800 text-white px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Galería Irregular
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto">
          Como tus decisiones: impredecibles, únicas, y un poco oscuras.
        </p>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg mb-4"
            >
              <img
                src={src}
                alt={`img-${idx}`}
                className="w-full object-cover transition-transform duration-300 blur-md hover:blur-0 hover:scale-105"
              />
            </div>
          ))}

        </Masonry>

        <p className="mt-12 text-sm text-slate-400 italic text-center max-w-md mx-auto">
          Desliza lento. Esto no está hecho para apurarte.
        </p>
      </div>
    </section>
  );
};

export default GalleryMasonrySection;
