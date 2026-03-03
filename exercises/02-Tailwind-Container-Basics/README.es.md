---
tutorial: "https://youtu.be/laZA-c3Gf2Y"
---

# `02` Tailwind Container Basics

Si quieres importar Tailwind CSS a tu sitio web, puedes usar este script CDN:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Al usar Tailwind, puedes controlar el ancho y centrado de tu contenido con clases de utilidad:

```html
<div class="container mx-auto"></div>
```
**O**

```html
<div class="w-full"></div>
```


## 📝 Instrucciones:

1. Agrega el script CDN de Tailwind CSS al documento usando la etiqueta `<script>` que encuentras arriba.

2. Introduce el contenido del sitio web dentro de un `<div>` con clases `container mx-auto` y `bg-gray-500`.

3. **Compila** y da una **vista previa** al ejercicio para ver el contenedor centrado.

4. Ahora cambia las clases del `<div>` que acabas de crear por `w-full` y `bg-gray-500`.

5. **Compila** y da una **vista previa** al ejercicio y compara las diferencias.


## 🔎 Importante:

Para entender la diferencia entre ambos enfoques:
- `container mx-auto` crea un contenedor centrado con puntos de ruptura de ancho máximo
- `w-full` hace que el contenido abarque todo el ancho de la página

Cambia el tamaño de la ventana del navegador para ver cómo se comporta el contenedor de manera diferente en varios tamaños de pantalla.
