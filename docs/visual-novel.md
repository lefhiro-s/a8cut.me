# Formato de escenas para Visual Novel

Este proyecto utiliza archivos JSON para definir las escenas. Cada escena cuenta con los siguientes campos:

- **id**: identificador único de la escena.
- **background**: imagen de fondo que se mostrará.
- **sprites**: lista de imágenes superpuestas sobre el fondo.
- **texts**: arreglo de burbujas de texto con coordenadas y parallax.
  - **content**: texto a desplegar.
  - **x**, **y**: coordenadas en porcentaje dentro de la escena.
  - **parallaxSpeed**: velocidad del efecto parallax.
  - **mouseParallaxSpeed**: parallax al mover el cursor.

## Ejemplo mínimo

```json
{
  "scenes": [
    {
      "id": "intro",
      "background": "bg-intro.png",
      "sprites": ["hero.png"],
      "texts": [
        {
          "content": "\u00a1Hola!",
          "x": 40,
          "y": 80,
          "parallaxSpeed": 0.1,
          "mouseParallaxSpeed": 0.02
        }
      ]
    }
  ]
}
```
