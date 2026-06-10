# 2GasDrive_DGT_CAT_2026

App móvil para practicar el test de la DGT en catalán. Modalidad Nitro, Turbo y Flash con sistema de puntos y tienda.

## Cómo usar

1. Clonar repo
2. `npm install`
3. `npm start`

## Añadir preguntas DGT

Editar `app.js` -> buscar `const dgtBank = [`

Formato:
```js
{
  question: "Texto de la pregunta",
  options: ["A", "B", "C"],
  correct: 0,
  explanation: "Explicación"
}