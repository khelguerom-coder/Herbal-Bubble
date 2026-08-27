# Herbal Bubble — Web para Feria de Emprendimiento 2026

Proyecto web responsive preparado para trabajar con **npm + Vite**, subir a GitHub y desplegar en Vercel.

## Requisitos

- Node.js 20 o superior recomendado.
- npm incluido con Node.js.

## Abrir el proyecto desde CMD

1. Descomprime la carpeta del proyecto.
2. Abre CMD dentro de la carpeta `herbal-bubble-web`.
3. Ejecuta:

```bash
npm install
```

4. Luego ejecuta:

```bash
npm run dev
```

5. Vite mostrará una dirección similar a:

```text
http://localhost:5173/
```

Puedes abrirla desde CMD con:

```cmd
start http://localhost:5173
```

## Comandos disponibles

```bash
npm run dev
npm run build
npm run preview
```

- `npm run dev`: servidor de desarrollo.
- `npm run build`: genera la versión de producción en `dist/`.
- `npm run preview`: previsualiza la compilación final.

## Estructura

- `index.html`: landing principal.
- `styles.css`: identidad visual y responsive.
- `script.js`: menú, animaciones y formulario de feedback.
- `assets/`: imágenes WebP optimizadas.
- `package.json`: configuración npm/Vite.
- `vercel.json`: configuración de despliegue.

## Subir a GitHub

```bash
git init
git add .
git commit -m "Herbal Bubble web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/herbal-bubble.git
git push -u origin main
```

## Publicar en Vercel

1. Importa el repositorio desde GitHub.
2. Vercel detectará el proyecto.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy.

## Formulario de feedback

En esta versión las respuestas se guardan en `localStorage` del navegador. Para producción puede conectarse luego a Google Forms, Supabase, Firebase o una función serverless de Vercel.
