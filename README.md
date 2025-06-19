# a8cut.me

## Descripción
Plataforma de entretenimiento interactivo que combina ruletas, visual novels, blogs y quizzes, con contenido gestionado vía JSON y desplegado en AWS S3.

## Estructura del Proyecto
- **public/**: Contiene el archivo `index.html` y assets estáticos.
- **src/**: Código fuente en React.
  - **components/**: Componentes reutilizables.
  - **pages/**: Páginas principales.
  - **routes/**: Rutas dinámicas para contenido (ruleta, blog, etc.).
  - **data/**: Archivos JSON con contenido.
- **utils/**: Funciones helper.

## Formato de los datos de la visual novel

Los componentes esperan un JSON con una estructura similar a la siguiente:

```json
{
  "scenes": [
    {
      "id": "intro",
      "image": "demo-section-scene-1.png",
      "texts": [
        {
          "content": "Línea de diálogo",
          "x": 50,
          "y": 80,
          "parallaxSpeed": 0.2,
          "mouseParallaxSpeed": 0.05
        }
      ]
    }
  ]
}
```

Cada escena referencia imágenes dentro de `public/sprites/novel/`. Las burbujas de texto usan coordenadas porcentuales (`x`, `y`) y pueden incluir valores opcionales para la paralaje.
