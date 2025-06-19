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
  - **docs/**: Documentaci\u00f3n adicional.

## Documentaci\u00f3n

- [Formato de escenas para Visual Novel](docs/visual-novel.md)
  - **data/**: Archivos JSON con contenido.
  - **utils/**: Funciones helper.
  - **index.css**: Estilos principales importados en `src/main.jsx`.

## Requisitos
- Node.js 18 o superior.

## Instalación
1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construye la versión de producción:
   ```bash
   npm run build
   ```

   Y previsualiza el resultado:
   ```bash
   npm run preview
   ```
