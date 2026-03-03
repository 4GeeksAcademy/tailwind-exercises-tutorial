---
tutorial: "https://youtu.be/bcaixxebDR4"
---

# `04` Navbar con Tabs

Como desarrolladores, constantemente creamos menús de navegación de la misma manera: usando etiquetas `ul`, eliminando las viñetas de `li`, mostrando la lista en línea, etc.

Tailwind CSS nos ayuda proporcionando clases de utilidad que podemos combinar para crear hermosos componentes de navegación.

En este caso, tenemos el típico `ul` necesario para crear un menú, pero sin aplicar ningún estilo CSS todavía.

> Más información sobre patrones de navegación con Tailwind: https://tailwindcss.com/docs/border-width

## 📝 Instrucciones:

1. **Compila** y da una **vista previa** del ejercicio.

2. Aplica las clases de Tailwind para crear una navegación horizontal con apariencia de pestañas (tabs):
   - Agrega `flex border-b border-gray-300` al `ul` para crear un contenedor horizontal con borde inferior
   - Agrega `px-4 py-2 border-b-2 border-transparent hover:border-gray-400 hover:text-gray-800 text-gray-600` a cada etiqueta `a` para el estilo de pestaña
   - Para la pestaña activa (Home), usa: `px-4 py-2 border-b-2 border-blue-500 text-blue-600`
   - Agrega `list-none` al `ul` para eliminar el estilo de lista predeterminado

3. **Compila** y da una **vista previa** nuevamente para ver la navegación estilo pestañas.

## 💡 Conceptos:

- `flex`: Hace la navegación horizontal
- `border-b`: Agrega borde inferior al contenedor
- `border-b-2`: Agrega un borde inferior de 2px a las pestañas individuales
- `border-blue-500`: Borde azul para la pestaña activa
- `border-transparent`: Borde invisible para pestañas inactivas
- `hover:border-gray-400`: Borde gris al pasar el mouse
- `px-4 py-2`: Padding para espaciado de pestañas
- `list-none`: Elimina las viñetas de lista predeterminadas
