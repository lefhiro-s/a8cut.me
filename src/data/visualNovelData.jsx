// src/data/visualNovelData.js
// Versión fija de la historia adaptada al nuevo componente
const novelData = {
  scenes: [
    {
      id: "intro",
      image: "demo-section-scene-1.png",
      texts: [
        {
          content: "Ella te observa desde dentro del televisor. ¿Está atrapada o te está esperando?",
          x: 25,
          y: 10,
          parallaxSpeed: 0.2,
          mouseParallaxSpeed: 0.05
        }
      ]
    },
    {
      id: "pregunta1",
      image: "demo-section-scene-2.png",
      texts: [
        {
          content: "Ella sonríe. ¿Es esto... carisma digital?",
          x: 50,
          y: 50,
          parallaxSpeed: 0.2,
          mouseParallaxSpeed: 0.05
        }
      ]
    },
    {
      id: "pregunta2a",
      image: "demo-section-scene-3.png",
      texts: [
        {
          content: "Ella te responde con una frase de código binario. ¿Eso fue un sí?",
          x: 50,
          y: 50,
          parallaxSpeed: 0.2,
          mouseParallaxSpeed: 0.05
        }
      ]
    },
    {
      id: "final2",
      image: "demo-section-scene-5b.png",
      texts: [
        {
          content: "Aceptás tu destino digital. Vivirás dentro de una historia generada por IA para siempre.",
          x: 50,
          y: 50,
          parallaxSpeed: 0.2,
          mouseParallaxSpeed: 0.05
        }
      ]
    }
  ]
};

export default novelData;
