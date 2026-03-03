---
tutorial: "https://youtu.be/OikbBoNvvps"
---

# `03` Tailwind Flexbox Layout

Ahora hablemos de layouts con Tailwind. Tailwind usa **flexbox** y **anchos fraccionarios** para crear layouts responsivos con un enfoque intuitivo.

Con Tailwind, puedes usar utilidades flex y clases de ancho para controlar cómo se distribuye tu contenido:

Por ejemplo:

```html
<div class="w-1/6">1/6 de ancho</div>
<div class="w-1/3">1/3 de ancho</div>
<div class="w-1/2">1/2 de ancho</div>
```

Fracciones de ancho comunes:
- `w-1/2` = 50% de ancho
- `w-1/3` = 33.33% de ancho
- `w-1/4` = 25% de ancho
- `w-full` = 100% de ancho

Para crear una fila de elementos, usa `flex` en el contenedor padre.

> Más información sobre flexbox: https://tailwindcss.com/docs/flex


## 📝 Instrucciones:

1. Haz que la segunda fila tenga 3 columnas del mismo ancho (divide la fila en 3).

2. Agrega una tercera fila con solo una columna que tome el ancho completo.

3. Cambia el color de fondo de la fila que acabas de crear a rojo, y agrega tu nombre dentro del `<div>`.

4. Cambia la clase del `<div>` principal de `container mx-auto` a `w-full`.


## 💡 Pistas:

+ Usa `w-1/3` para columnas que ocupan 1/3 del ancho.

+ Usa `bg-red-500` para el color de fondo rojo.

+ Recuerda agregar `flex` al contenedor padre para que flexbox funcione.


## 💻 Resultado Esperado:

![Example Image](../../.learn/assets/03-bootstrap-grid-result.png?raw=true)
